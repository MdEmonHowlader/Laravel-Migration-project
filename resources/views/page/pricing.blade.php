@extends('layout.app')
@section('content')
    <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');"
        data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Home <i
                                    class="ion-ios-arrow-forward"></i></a></span> <span>Pricing <i
                                class="ion-ios-arrow-forward"></i></span></p>
                    <h1 class="mb-0 bread">Pricing</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center pb-5 mb-3">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <h2>Affordable Packages</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 ftco-animate">
                    <div class="block-7">
                        <div class="img" style="background-image: url(images/pricing-1.jpg);"></div>
                        <div class="text-center p-4">
                            <span class="excerpt d-block">Personal</span>
                            <span class="price"><sup>$</sup> <span class="number">49</span> <sub>/mos</sub></span>

                            <ul class="pricing-text mb-5">
                                <li><span class="fa fa-check mr-2"></span>5 Dog Walk</li>
                                <li><span class="fa fa-check mr-2"></span>3 Vet Visit</li>
                                <li><span class="fa fa-check mr-2"></span>3 Pet Spa</li>
                                <li><span class="fa fa-check mr-2"></span>Free Supports</li>
                            </ul>

                            <a href="#" class="btn btn-primary d-block px-2 py-3">Get Started</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ftco-animate">
                    <div class="block-7">
                        <div class="img" style="background-image: url(images/pricing-2.jpg);"></div>
                        <div class="text-center p-4">
                            <span class="excerpt d-block">Business</span>
                            <span class="price"><sup>$</sup> <span class="number">79</span> <sub>/mos</sub></span>

                            <ul class="pricing-text mb-5">
                                <li><span class="fa fa-check mr-2"></span>5 Dog Walk</li>
                                <li><span class="fa fa-check mr-2"></span>3 Vet Visit</li>
                                <li><span class="fa fa-check mr-2"></span>3 Pet Spa</li>
                                <li><span class="fa fa-check mr-2"></span>Free Supports</li>
                            </ul>

                            <a href="#" class="btn btn-primary d-block px-2 py-3">Get Started</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ftco-animate">
                    <div class="block-7">
                        <div class="img" style="background-image: url(images/pricing-3.jpg);"></div>
                        <div class="text-center p-4">
                            <span class="excerpt d-block">Ultimate</span>
                            <span class="price"><sup>$</sup> <span class="number">109</span> <sub>/mos</sub></span>

                            <ul class="pricing-text mb-5">
                                <li><span class="fa fa-check mr-2"></span>5 Dog Walk</li>
                                <li><span class="fa fa-check mr-2"></span>3 Vet Visit</li>
                                <li><span class="fa fa-check mr-2"></span>3 Pet Spa</li>
                                <li><span class="fa fa-check mr-2"></span>Free Supports</li>
                            </ul>

                            <a href="#" class="btn btn-primary d-block px-2 py-3">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
        style="background-image: url(images/bg_3.jpg);">
        <div class="overlay"></div>
        <div class="container">
            <div class="row d-md-flex justify-content-end">
                <div class="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
                    <h2 class="mb-4">Free Consultation</h2>
                    <form action="#" class="appointment">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-field">
                                        <div class="select-wrap">
                                            <div class="icon"><span class="fa fa-chevron-down"></span></div>
                                            <select name="" id="" class="form-control">
                                                <option value="">Select services</option>
                                                <option value="">Cat Sitting</option>
                                                <option value="">Dog Walk</option>
                                                <option value="">Pet Spa</option>
                                                <option value="">Pet Grooming</option>
                                                <option value="">Pet Daycare</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Vehicle number">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-wrap">
                                        <div class="icon"><span class="fa fa-calendar"></span></div>
                                        <input type="text" class="form-control appointment_date" placeholder="Date">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-wrap">
                                        <div class="icon"><span class="fa fa-clock-o"></span></div>
                                        <input type="text" class="form-control appointment_time" placeholder="Time">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="submit" value="Send message" class="btn btn-primary py-3 px-4">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
