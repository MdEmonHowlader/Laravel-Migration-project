function detectRadius(r, h, w, i) {
    if (typeof r === 'object') {
        if (r[i] > h / 2) {
            r[i] = h / 2;
        }
        if (r[i] > w / 2) {
            r[i] = w / 2;
        }
        return r[i];
    } else {
        if (r > h / 2) {
            r = h / 2;
        }
        if (r > w / 2) {
            r = w / 2;
        }
        return r;
    }
}
window.Chart.elements.Rectangle.prototype.draw = function() {
    var ctx = this._chart.ctx,
        vm = this._view,
        left, right, top, bottom, signX, signY, borderSkipped, borderWidth, defaults = {
            options: {
                cornerRadius: 0
            }
        },
        dataSettings = $(this._chart.canvas).attr('data-hs-chartjs-options') ? JSON.parse($(this._chart.canvas).attr('data-hs-chartjs-options')) : {},
        settings = $.extend(true, dataSettings.type, defaults, dataSettings);
    borderWidth = vm.borderWidth;
    if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || 'bottom';
    } else {
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }
    if (borderWidth) {
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        var halfStroke = borderWidth / 2;
        var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
        var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
        var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }
    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;
    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];
    var borders = ['bottom', 'left', 'top', 'right'],
        startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }
    var corner = cornerAt(0),
        radius, nextCornerId, nextCorner, width, height, x, y;
    ctx.moveTo(corner[0], corner[1]);
    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i + 1;
        if (nextCornerId === 4) {
            nextCornerId = 0;
        }
        nextCorner = cornerAt(nextCornerId);
        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];
        radius = settings.options.cornerRadius;
        ctx.moveTo(x + detectRadius(radius, height, width, typeof radius === 'object' ? 0 : null), y);
        ctx.lineTo(x + width - detectRadius(radius, height, width, typeof radius === 'object' ? 0 : null), y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + detectRadius(radius, height, width, typeof radius === 'object' ? 0 : null));
        ctx.lineTo(x + width, y + height - detectRadius(radius, height, width, typeof radius === 'object' ? 1 : null));
        ctx.quadraticCurveTo(x + width, y + height, x + width - detectRadius(radius, height, width, typeof radius === 'object' ? 1 : null), y + height);
        ctx.lineTo(x + detectRadius(radius, height, width, typeof radius === 'object' ? 2 : null), y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - detectRadius(radius, height, width, typeof radius === 'object' ? 0 : null));
        ctx.lineTo(x, y + detectRadius(radius, height, width, typeof radius === 'object' ? 3 : null));
        ctx.quadraticCurveTo(x, y, x + detectRadius(radius, height, width, typeof radius === 'object' ? 3 : null), y);
    }
    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
};