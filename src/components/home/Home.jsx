import React from "react";
import ImageBG from "../ImageBG";
import ProductContainer from "../ProductContainer";

export default function Home() {
  const data = [
    {
      h2_text: "Tack with your buddies!",
      p_text:
        "Discover new friends and/or build up your own community forothers to flock to.",
      imgSrc: "1",
    },

    {
      h2_text: "Your Privacy and Security!",
      p_text:
        "Tackgram closely monitors privacy and security for the benefit of the user’s safety and experience.",
      imgSrc: "2",
    },
    {
      h2_text: "Freedom of Expression",
      p_text:
        "Tack your thoughts, opinions, and artistry on your wall. Make it yours.",
      imgSrc: "3",
    },
    {
      h2_text: "Let it be and talk free!",
      p_text:
        "Tackgram chat with various communities and people privately using our encrypted messaging.",
      imgSrc: "4",
    },
    {
      h2_text: "Content real time!",
      p_text:
        "Explore your interests, friends interests and what is the latest in your region as well as the world.",
      imgSrc: "5",
    },
    {
      h2_text: "Explore Tackgram World!",
      p_text:
        "Search for friends, various topics or browse Tackgram for pure entertainment. Leave a comment, reaction, follow or share.",
      imgSrc: "6",
    },
    {
      h2_text: "Spread your word with world!",
      p_text:
        "As a tacker, utilize all our features to better communicate your personality to the Tackgram community.",
      imgSrc: "7",
    },
    {
      h2_text: "Express how you feel!",
      p_text:
        "Did a post make you happy, sad, angry, uncomfortable, cringe or lol? Reactions are a great way to bring emotion to text!",
      imgSrc: "8",
    },

    {
      h2_text: "Tack a joke and make your audience laugh!",
      p_text:
        "Everyone will see the smile icon on your post and know it will contain a joke or something humorous. Make someone giggle at your post!",
      imgSrc: "9",
    },
    {
      h2_text: "Going or not going?",
      p_text:
        "Create/Share a post for an event to instantly let everyone know if you will be attending or hosting an event.",
      imgSrc: "9",
    },
  ];
  return (
    <div>
      {/* <!--start home area--> */}
      <section id="home-area" class="slider" data-scroll-index="0">
        <div class="home-slider owl-carousel">
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Tack with your buddies!</h1>
                  <p>
                    Discover new friends and/or build up your own community for
                    others to flock to.
                  </p>
                  <a>
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/1.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Your Privacy and Security!</h1>
                  <p>
                    Tackgram closely monitors privacy and security for the
                    benefit of the user’s safety and experience.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/2.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Freedom of Expression</h1>
                  <p>
                    Tack your thoughts, opinions, and artistry on your wall.
                    Make it yours.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/3.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Let it be and talk free!</h1>
                  <p>
                    Tackgram chat with various communities and people privately
                    using our encrypted messaging.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/4.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Content real time!</h1>
                  <p>
                    Explore your interests, friends interests and what is the
                    latest in your region as well as the world.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/5.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Explore Tackgram World!</h1>
                  <p>
                    Search for friends, various topics or browse Tackgram for
                    pure entertainment. Leave a comment, reaction, follow or
                    share.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/6.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Spread your word with world!</h1>
                  <p>
                    As a tacker, utilize all our features to better communicate
                    your personality to the Tackgram community.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/7.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Express how you feel!</h1>
                  <p>
                    Did a post make you happy, sad, angry, uncomfortable, cringe
                    or lol? Reactions are a great way to bring emotion to text!
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/8.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Tack a joke and make your audience laugh!</h1>
                  <p>
                    Everyone will see the smile icon on your post and know it
                    will contain a joke or something humorous. Make someone
                    giggle at your post!
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/9.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
          {/* <!--start slide single--> */}
          <div class="slide-single row">
            {/* <!--start caption content--> */}
            <div class="col-lg-6 col-md-7">
              <div class="caption-content d-table">
                <div class="d-table-cell align-middle">
                  <h1>Going or not going?</h1>
                  <p>
                    Create/Share a post for an event to instantly let everyone
                    know if you will be attending or hosting an event.
                  </p>
                  <a href="#">
                    {" "}
                    <img src="assets/images/button.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end caption content--> */}
            {/* <!--start caption image--> */}
            <div class="col-lg-6 col-md-5">
              <div class="caption-img">
                <img
                  src="assets/images/10.png"
                  class="img-fluid animation-jump"
                  alt=""
                />
              </div>
            </div>
            {/* <!--end caption image--> */}
          </div>
          {/* <!--end slide single--> */}
        </div>
      </section>
      {/* <!--end home area--> */}

      {/* <!--start product area--> */}
      <section id="product-area" data-scroll-index="3">
        {data.map((item) => (
          <ProductContainer
            h2_text={item.h2_text}
            p_text={item.p_text}
            imgSrc={item.imgSrc}
          />
        ))}
      </section>
      {/* <!--staendrt product area--> */}
    </div>
  );
}
