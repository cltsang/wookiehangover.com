import cx from 'classnames'
import Head from '../src/components/head'
import Link from 'next/link'
import Footer from '../src/components/footer'

export default () =>
  <div>
    <Head />
    <main className={`mw7 pa3 pa4-ns center bg-rainbows`}>
      <header>
        <h1>
          Samuel Breed
          <sup><a href="#footnote-01">1</a></sup>
        </h1>
        <p>
          <a href="mailto:samuel.breed@gmail.com">samuel.breed@gmail.com</a> 
          <a href="/pub-gpg.txt" className={`f7 pa1 ba ml2`}>pgp 🔐</a>
        </p>
        <p>Product Engineer<sup><a href="#footnote-02">2</a></sup></p>
      </header>

      <section className={`lh-copy`}>
        <h4>Work Experience:</h4>
        <ol className="pl3">
          <li>
            <strong><a href="https://www.creditkarma.com">Credit Karma</a></strong>
            <cite>2015—present</cite>

            <ul className={`mt3`}>
              <li>Staff Engineer<sup><a href="#footnote-03">3</a></sup></li>
            </ul>

            <p>In the fall of 2015 I joined Credit Karma as the technical lead for the front-end web team. Under my direction, the front-end teams have created web applications responsible for hundreds of millions of pageviews.</p>

            <p className={`i`}>Notable Projects</p>
            <ul className={`mb3`}>
              <li>2017:
                <ul>
                  <li>Credit Cards team tech lead 💳</li>
                  <li>Launch Node.js server side rendering platform 🖼</li>
                </ul>
              </li>
              <li>2016:
                <ul>
                  <li>Re-brand and site-wite redesign launch 🚀</li>
                  <li>Create private npm to CDN deploy pipeline 📦</li>
                  <li>Credit Karma Canada launch 🇨🇦 </li>
                  <li>Mobile Web launch 📲</li>
                </ul>
              </li>
              <li>2015:
                <ul>
                  <li>Launch Credit Karma's first server rendered React app</li>
                  <li>Adopt private npm and a modular front end architecture</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://quickleft.com/">
              <strong>Quick Left</strong>
            </a>
            <cite>2009—2015</cite>
            <ul className={`mt3`}>
              <li>Co-founder</li>
              <li>Lead Developer</li>
              <li>General Manager, Product</li>
            </ul>
            <p>In 2009 I co-founded the Boulder, Colo. software consultancy Quick Left. Over the next 6 years, I led the business in various roles as we grew from a modest 2-person operation to a team of more than 40 spanning four offices. We specialized in building products, solving deep technical challenges and worked with companies ranging from small startups to the top of the Fortune 500.<sup><a href="#footnote-04">4</a></sup></p>

            <p>After departing in 2015<sup><a href="#footnote-05">5</a></sup>, I remained on the Board of Directors to see through the 2016 sale to the global consulting firm Cognizant.</p>
          </li>
        </ol>
      </section>

      <section className={`lh-copy`}>
        <h4>Education:</h4>
        <ul>
          <li>
            BFA Film Production (incomplete)<sup><a href="#footnote-06">6</a></sup><br/>
            <i>Univeristy of Colorado, Boulder 2004—2007</i>
          </li>
        </ul>
      </section>

      <section>
        <h4>See also:<sup><a href="#footnote-07">7</a></sup></h4>
          <div className={`flex flex-wrap justify-center`}>
            <div className={`ba pa3 ma2`}><a href="https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/">Frontend Masters</a></div>
            <div className={`ba pa3 ma2`}>Favorite emoji: 🙈 <sup><a href="#footnote-08">8</a></sup></div>
            <div className={`ba pa3 ma2`}><a href="https://www.youtube.com/watch?v=QqSHrpro02g">Backbone Conf 2014</a></div>
            <div className={`ba pa3 ma2`}><a href="https://www.youtube.com/watch?v=nMVXumwItcw">Hapi Day Oakland 2014</a></div>
            <div className={`ba pa3 ma2`}><a href="https://www.youtube.com/watch?v=Lm05e5sJaE8">Backbone Conf 2013</a></div>
            <div className={`ba pa3 ma2`}><a href="https://www.youtube.com/watch?v=W5ti8cl3nzs">jQuery Conf 2013</a></div>
            <div className={`ba pa3 ma2`}><a href="https://obliquestrategies.website/">obliquestrategies.website</a> + <a href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">Chrome Plugin</a> + <a href="https://twitter.com/ObliqueBot/status/886236405118062592">Twitter bot</a></div>
          </div>
      </section>

      <footer className={`pb4 mw-7 lh-copy`}>
        <h4>Footnotes:</h4>

        <ol className={`f6`}>
          <li id="footnote-01">
            Hello and welcome to my résumé! Let's get to know each other a little before we get things started. My name is Samuel Breed and I made this website, which is fitting because it's about me. I live north of San Francisco. I started riding motorctyles in <b>2014</b>. My current daily rider is a <a href="/static/img/ktm_690.jpg">KTM Enduro 690</a>. It's fast and loud, which I enjoy.
          </li>

          <li id="footnote-02">
            Sounds good, right?
          </li>

          <li id="footnote-03">
            Hey, a second job title already! Okay, so "Staff Engineer" means that I'm responsible for broad areas of tech at Credit Karma, which presently means I oversee what we do for web. So if you get to it with a web browser, my team has something to do with that. Watch out, a whole buncha more titles are coming at you before it's all said and done.
          </li>

          <li id="footnote-04">
            We're dope and we make dope shit.
          </li>

          <li id="footnote-05">
            In 2008 I was the backstock manager of an American Apparel store, which means I counted and folded about 30,000 t-shirts. I had been doing occasional gig work in the Colorado film industry, which means a dozen or so student films, a handful of commercials, and most notably the shoot that produced <a href="/static/img/aaah.gif">this animated gif</a>. I ended up making a wordpress site for a small company I was working for and got paid for it. That's how I started freelancing. A year later I met Colin and a few months after that, Ingrid, and we started Quick Left. We ran a frantic pace for several years and I learned everything I know on that job, by the seat of my pants.
          </li>

          <li id="footnote-06">
            So. "I dropped out of film school" has become something I'll inevitably include as part of my biography, and it always sounds like a cliche the moment I say it. But, that's the most succint way of putting it. To properly frame things: it was 2007, and I wasn't a great filmmaker, but I didn't know that yet. I was only taking film classes (alternating between watching movies and working with cameras and computers) and english lit, and I wasn't exactly flourishing. Either way, in 2007 the financing keeping me in school evaporated and I dropped out and worked to pay off what I owed the school instead of taking out student loans. I don't regret it because it was an formative moment that thrust me out of perpetual adolensence and led to the events outlined in <sup>4</sup>.
          </li>

          <li id="footnote-07">
            This seems like good spot for pseudo-relevant padding so I chose to include it.
          </li>

          <li id="footnote-08">
            Yes I'm for real with the custom cursor.
          </li>
        </ol>
      </footer>
    </main>

    <Footer />
  </div>
