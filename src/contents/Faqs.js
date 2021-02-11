import React, {Component} from 'react';
import { useLax, useLaxElement } from 'use-lax';
import {Link as myLink} from "react-router-dom";
import {Link} from "react-scroll";
const Faqs = () => {
    useLax(); // init
        return (
            <div className="faqContent">

                <div className="leftContainer">
                    <div className="content" id="section1">
                        <div className="contentTitle"> WHO ARE OUR REVIEWERS?</div>
                        <div>
                            <p> ChecknCommit® reviewers are diverse and inclusive of a range of different
                                customers.</p>
                            <p>They include anyone who meets and adheres to our guidelines on<b> who can write
                                a review.</b></p>
                            All ChecknCommit® reviewers have a few things in common:
                            <p><b>•Certified:</b> All ChecknCommit® reviewers are authenticated via their email
                                address</p>
                            before writing a review.<p><b>•Established Users:</b> Prior to publishing a review, the
                            ChecknCommit® research team
                            verifies that each reviewer has a recent experience with the product.</p>
                            <p><b>•Unbiased Opinions:</b> While we acknowledge that every reviewer has an individual
                                and personal point of view, ChecknCommit will refuse to publish any review that
                                shows a clear bias or conflict of interest. We do not publish reviews from a vendor
                                or organization’s own employee or those of rival standing.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="content lax" id="section2" data-lax-preset=" fadeIn">
                        <div className="contentTitle"> WHO CAN WRITE A REVIEW?
                        </div>
                        <div>
                            <p> Useful reviews reflect genuine experiences had by real people. That's why we have
                                rules about who's eligible to leave a review on ChecknCommit®.</p>
                            <br/>
                            <p>You can <b>write a review</b> on ChecknCommit® if you've <b>had an experience with
                                the service within the last 12 months </b>- that is, you bought or ordered
                                something, or used the service within the last 12 months.
                                If you received a receipt or other documentation that shows you used a service, hang
                                onto it in case there's a question about your review.
                                Remember to double check that you've posted your review on the right vendor's
                                profile page!
                            </p>

                        </div>
                    </div>
                    <hr/>
                    <br/>

                    <div className="content lax" id="section3" data-lax-preset=" fadeIn">
                        <div className="contentTitle">Do I need to create a user profile on ChecknCommit?
                        </div>
                        <div>
                            <p>If all you’re looking to do is read reviews about a particular vendor, business, or
                                organisation, then you can
                                browse without creating a profile or logging in. However, if you are interested in
                                sharing your experience(s) with
                                others by writing a review, you will need to log in to do so.</p>

                        </div>
                    </div>
                    <hr/>
                    <br/>

                    <div className="content lax" id="section4" data-lax-preset=" fadeIn">
                        <div className="contentTitle">Why do I need a user profile to write a review?
                        </div>
                        <div>
                            <p>We want to ensure that we maintain the quality and authenticity of all reviews on
                                ChecknCommit
                                and protect our customers that come to our website looking for trustworthy and
                                honest opinions. Because of this,
                                every review posted must be connected to a profile that has a real person behind it.
                                Additionally, in some cases, we may need to contact you to ascertain that your
                                review is genuine and in line with our User Guidelines policy. This means that we
                                require that your profile be linked to
                                an active and valid email address, that we can use to contact you if necessary. This
                                email address is also used to
                                notify you when there are replies to your reviews..</p>

                        </div>
                    </div>
                    <hr/>
                    <br/>

                    <div className="content lax" id="section5" data-lax-preset=" fadeIn">
                        <div className="contentTitle">Do I need to include a profile picture?
                        </div>
                        <div>
                            <p>It is entirely up to you whether you include a profile picture on your CheckNCommit
                                review account. You can also change or delete your
                                uploaded profile picture at any time.</p>

                        </div>
                    </div>
                    <hr/>
                    <br/>


                    <div className="content lax" id="section6" data-lax-preset=" fadeIn">
                        <div className="contentTitle">Can I delete my account?
                        </div>
                        <div>
                            <p>Yes, you can delete your account on ChecknCommit if you no longer wish to write
                                reviews.
                                However, it is important to note that this will erase your account and all of the
                                reviews that
                                are associated with it, both of which we will not be able to recover.</p>

                        </div>
                    </div>
                    <hr/>
                    <br/>

                    <div className="content lax" id="section7" data-lax-preset=" fadeIn">
                        <div className="contentTitle">WHEN CAN YOU WRITE A REVIEW?
                        </div>
                        <div>
                            <p>

                                Our User Guidelines set out that you can write a review if:</p>
                            <br/>
                            <ul>
                                <li> You <b>bought</b> a product - you purchased a product or service, or</li>
                                <li> You <b>ordered</b> an item - you placed an order with the business or vendor
                                </li>
                                you're reviewing (irrespective of whether the order was later cancelled
                                or not), or
                                <li> You <b>can show that you used the services</b> - you haven't bought or ordered
                                    anything, but you can otherwise document your use of the business or
                                    vendor's services. This might be by showing correspondence with the vendor or
                                    documentation of some other interaction.
                                </li></ul>
                            <br/>
                            <p><b>Tip:</b> Save a photo or copy of any documentation that shows you've had an
                                experience with a service in case there's a question about your review after you've
                                posted it.
                            </p>

                        </div>
                    </div>
                    <hr/>
                    <br/>


                    <div className="content lax" id="section8" data-lax-preset=" fadeIn">
                        <div className="contentTitle">WHO ARE ANONYMOUS REVIEWERS?
                        </div>
                        <div>
                            <p>
                                As well as making sure you fit one of the above situations, make sure your review
                                is:
                            </p>
                            <br/>
                            <ul>
                                <li> Only about your own experience - not someone else's, and</li>
                                <li> About an experience you’ve had <b>within the last 12 months.</b>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <hr/>
                    <br/>


                    <div className="content lax" id="section9" data-lax-preset=" fadeIn">
                        <div className="contentTitle">WHO ARE ANONYMOUS REVIEWERS?
                        </div>
                        <div>
                            <p>
                                No reviewer is ‘anonymous’ to us – ChecknCommit® verifies all reviewers via their
                                email address. However, we give reviewers
                                the option to remain unnamed to the general public, as this is required by some
                                regulation corporations before certain users can write a review. ChecknCommit®,
                                however, encourages you to display your identity when
                                writing a review, as this allows for transparency and gives other potential buyers
                                the more trustworthy and valued perspective of
                                a named author, rather than someone anonymous.
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <br/>

                    <div className="content lax" id="section10" data-lax-preset=" fadeIn">
                        <div className="contentTitle">WHERE WILL MY REVIEWS BE DISPLAYED?
                        </div>
                        <div>
                            <p>When you write a review on ChecknCommit®, it can be displayed in several places:
                            </p>

                            <p>
                                <b>The Vendor's ChecknCommit® Profile</b>
                                You can always find your review on the vendor's ChecknCommit® profile. This is the
                                only place where your review is guaranteed to appear publicly.
                                Over time, more recent reviews appear above your review and may push it further down
                                the page. It might become more difficult to find your review, but don't worry – it's
                                still there!

                            </p>
                        </div>
                    </div>
                    <hr/>
                    <br/>


                    <div className="content lax" id="section11" data-lax-preset=" fadeIn">
                        <div className="contentTitle">Displayed on ChecknCommit
                        </div>
                        <div>
                            <p>
                                Your review may appear in other places on the ChecknCommit® website. Some of these
                                pages are also visible to the public.</p>
                            <br/>
                            <ul>


                                <li><b>My reviews</b> - Every reviewer has a personal profile on ChecknCommit®, and
                                    every review you've ever written is displayed under
                                    the <b>My
                                        reviews</b> section of your profile. Point to your profile icon in the
                                    upper-right corner of any <b>ChecknCommit</b> page, then select
                                    <b> My reviews</b>
                                    from the drop-down list to see a collated list of all your reviews.
                                </li>
                                <li><b>ChecknCommit Homepage</b> - ChecknCommit® features some of the latest reviews
                                    of different vendors on its homepage. These change quickly as
                                    new reviews are posted. We receive many new reviews every day, so if your review
                                    is featured, it will likely only be displayed here for a
                                    short time.
                                </li>
                                <li><b>Displayed by the business</b> - Sometimes, a business chooses to display your
                                    review in a public place. This could be on their website,
                                    on a social network, or offline, for example as part of a marketing campaign.
                                    This extends the reach of your review, bringing it to a wider
                                    audience.
                                </li>

                            </ul>


                        </div>
                    </div>
                    <hr/>
                    <br/>


                    <div className="content lax" id="section12" data-lax-preset=" fadeIn">
                        <div className="contentTitle">WHAT’S NOT ALLOWED ON CHECKNCOMMIT?
                        </div>
                        <div>

                            <ul>


                                <li> Because reviews are user-generated content, as a general rule we don't delete
                                    them. However, if you misuse your user profile to the point where we have to
                                    remove it, all the reviews attached to your account will also be deleted.
                                </li>
                                <li> If we ask you to change your review to bring it in line with our guidelines and
                                    you
                                    fail to make the necessary changes, we can remove your review.
                                </li>
                                <li> It is not permitted to misuse our reporting or notification tools, particularly
                                    to
                                    threaten, abuse or blackmail companies, commit fraud, or carry out
                                    inappropriate behavior in connection with using ChecknCommit®.
                                </li>

                            </ul>


                        </div>
                    </div>
                    <hr/>
                    <br/>

                    <div className="content lax" id="section13" data-lax-preset=" fadeIn">
                        <div className="contentTitle">HOW TO WRITE A REVIEW
                        </div>
                        <div>

                            Check out our <myLink to="/guideline">guidelines and tips for reviewers</myLink> for
                            step-by-step instructions on all
                            the basics - from signing up for a ChecknCommit® profile, to finding a particular
                            vendor and leaving a review.


                        </div>
                    </div>

                    <br/>


                </div>

                <div className="rightContainer lax" data-lax-preset="fadeIn">

                    <menu>
                        <ul>
                            <li>
                                <Link activeClass="active"
                                      to="section1"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}> WHO ARE OUR REVIEWERS?</Link>
                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    WHO CAN WRITE A REVIEW?
                                </Link>

                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    Do I need to create a user profile on CheckNCommit?
                                </Link>
                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    Why do I need a user profile to write a review?
                                </Link>
                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section5"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    Do I need to include a profile picture?
                                </Link>
                            </li>
                            <hr/>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="section6"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    Can I delete my account?
                                </Link>
                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section7"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    WHEN CAN YOU WRITE A REVIEW?
                                </Link>
                            </li>
                            <hr/>


                            <li>
                                <Link
                                    activeClass="active"
                                    to="section8"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    WHAT OTHER REQUIREMENTS ARE THERE?
                                </Link>
                            </li>
                            <hr/>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="section9"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    WHO ARE ANONYMOUS REVIEWERS?
                                </Link>
                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section10"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    WHERE WILL MY REVIEWS BE DISPLAYED?
                                </Link>
                            </li>
                            <hr/>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="section11"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    Displayed on ChecknCommit
                                </Link>
                            </li>
                            <hr/>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section12"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    WHAT’S NOT ALLOWED ON CHECKNCOMMIT?
                                </Link>
                            </li>
                            <hr/>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="section13"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={600}>
                                    HOW TO WRITE A REVIEW?
                                </Link>
                            </li>
                            <hr/>
                        </ul>

                        <ul>
                            <div className="contentTitle">
                                OTHER RELATED FAQs
                            </div>

                            <li>
                                <Link activeClass="active"
                                      to="section14"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}>
                                    HOW CAN REVIEWS IMPROVE YOUR ONLINE SHOPPING EXPERIENCES?
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active"
                                      to="section15"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}>
                                    THE BASICS
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active"
                                      to="section16"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}>
                                    What else should you look at?
                                </Link>
                            </li>

                            <li>
                                <Link activeClass="active"
                                      to="section17"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}>
                                    What’s the bottom line?
                                </Link>
                            </li>
                        </ul>
                    </menu>
                </div>

                <div className="leftContainer">
                    <div className="title">
                        OTHER RELATED FAQs
                    </div>
                    <div className="content lax" id="section14" data-lax-preset=" fadeIn">
                        <div className="contentTitle"> HOW CAN REVIEWS IMPROVE YOUR ONLINE SHOPPING EXPERIENCES?
                        </div>
                        <div>
                            <p> Have you ever come across an online shopping deal that seems too good to be true?
                                Before buying, it could pay off to do a bit of research first.
                                How do you know which vendors are trustworthy? What are the warning signs of
                                fraudulent online retailers? Here are our tips and tricks for navigating the world
                                of
                                online shopping, with the help of ChecknCommit® reviews
                                .</p>

                        </div>
                    </div>

                    <br/>
                    <hr/>
                    <div className="content lax" id="section15" data-lax-preset=" fadeIn">
                        <div className="contentTitle"> THE BASICS</div>
                        <div>
                            <p>
                                <ul>
                                    <li>

                                        Get an overview: On ChecknCommit®, look at the vendor's star rating and
                                        ChecknCommit® Score - the higher their score, the more likely it is the
                                        vendor is
                                        providing a good service. Additionally, looking at their percentage of
                                        excellent and
                                        great reviews versus poor and bad reviews can give you an idea of customer
                                        experiences with the vendor.
                                    </li>
                                    <li> Look at a wide range of reviews: Aim to read 10-20 reviews to get an
                                        overall
                                        impression of a vendor. If a particular vendor only has a few reviews on
                                        ChecknCommit®, consider checking other online portals.
                                    </li>
                                    <li> Read reviews thoroughly: The devil is in the details. See what people
                                        highlight as
                                        especially good or bad. Keep in mind that reviews are subjective - what one
                                        person
                                        sees as a problem may be an advantage to someone else!
                                    </li>
                                    <li> Check the date a review was published: If a review is more than a year old,
                                        consider
                                        that the business could have changed hands or switched focus since its
                                        publication. For example, a vendor/organization can go out of business, only
                                        to
                                        have their web address bought and taken over by someone new. In some cases,
                                        the new owner of the portal may not be as trustworthy as the original owner.
                                    </li>

                                </ul>
                            </p>

                        </div>
                    </div>
                    <br/>
                    <hr/>

                    <div className="content lax" id="section16" data-lax-preset=" fadeIn">
                        <div className="contentTitle">What else should you look at?</div>
                        <div>
                            <p> If you're unfamiliar with a vendor/organization, it's a good idea to check their website
                                and other internet sources for warning signs. For example:</p>
                            <ul>
                                <li> <b> Is the language strange?</b> Websites of real and professional businesses are usually
                                    well put together. If the text is littered with mistakes and the website looks
                                    unorganized, it could be a sign of a scam.</li>
                                <li>  <b>Does the website’s address correspond to the type of product being sold? </b>
                                    Fraudsters can buy up website addresses that used to belong to legitimate web
                                    stores that have gone out of business, and then use these domains to create fake
                                    shops. If the website’s name or address is strange, or not in accordance with the
                                    products being offered for sale, then this could indicate a fake online shop.</li>
                                <li>  Are any contact details provided for the business? If so, do these fit with the other
                                    aspects of the site, and when put into a search engine come back as being
                                    associated with the company name? Genuine web stores shouldn’t have anything
                                    to hide, but fake websites often have no contact details available, or list illegitimate
                                    phone numbers or addresses.</li>
                                <li>  Other online research. Do a Google search and see if anyone else has written about
                                    the website? If the results don’t add up, or there is little information available,
                                    proceed with caution.</li>
                                <li> Use common sense and trust your instincts. Have you come across a deal that
                                    seems too good to be true? If so, chances are, it probably is.</li>
                            </ul>

                        </div>
                    </div>
                    <br/>
                    <hr/>


                    <div className="content lax" id="section17" data-lax-preset="fadeIn">
                        <div className="contentTitle">What’s the bottom line?</div>
                        <div>
                            <p> Online review sites are a helpful resource that are best used together with other
                                checks – they should never replace common sense!</p>


                        </div>
                    </div>
                </div>
            </div>
        );

};

export default Faqs;