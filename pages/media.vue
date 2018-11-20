<template>
  <primary-section title="Media" subtitle="Shameless self-promotion" texture="plus">
    <div>
      <project
        is-cover
        img-src="/imgs/media/smart-robots.png"
        title="Brains and Bodies: How to Make Smart Robots"
        subtitle="Science in the News fall lecture series, 14 November 2018"
      >
        <div>
          <p>Together with Buse Atkaş, I gave a public lecture on robotics. We covered what it means for a robot to be smart, and how we can use different techniques from mechanics, biology, and learning, and collaboration to build better robots.</p>
          <p>A video of the lecture will be available soon at the link below!</p>
          <icon-link
            icon="link"
            to="http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/"
          >See more</icon-link>
        </div>
      </project>
      <project
        title="Humans control complex objects by exploiting their stability"
        subtitle="Physics Today and Scilight, 1 October 2018"
      >
        <div>
          <p>Our
            <a href="/pdfs/article/2018_chaos.pdf">paper on stability in human movement</a>was an editor's pick in
            <i>Chaos</i>and was featured by Scilight and Physics Today.
          </p>
          <icon-link
            icon="atom"
            to="https://physicstoday.scitation.org/do/10.1063/PT.6.1.20181001a/full/"
          >Read Physics Today article</icon-link>
          <icon-link
            icon="newspaper"
            to="https://aip.scitation.org/doi/full/10.1063/1.5063585"
          >Read Scilight article</icon-link>
        </div>
      </project>
      <project
        is-cover
        img-src="/imgs/media/robotstravaganza.png"
        title="Robotstravaganza"
        subtitle="Brains On! Podcast"
      >
        <div>
          <p>I was a guest on a live show of Brains On! (a science podcast for kids) at the Cambridge Science Festival. I showed off my LARVAbots and talked about bioinspired collective robotics.</p>
          <icon-link
            icon="radio"
            to="https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza"
          >Listen</icon-link>
        </div>
      </project>
      <project
        img-src="/imgs/media/health-innovators.png"
        title="Interview at TELHack NHS Hackathon"
        subtitle="Health Innovators TV"
      >
        <div>
          <p>"TELHack innovators speak about the inspiration behind their idea, challenges along the way and how their innovation will help improve patient care."</p>
          <icon-link
            icon="movie"
            to="http://www.healthinnovators.tv/detail/videos/innovation-live/video/4651670881001/interview-with-suture-score-nhs-telhack?autoStart=true"
          >Watch Video</icon-link>
        </div>
      </project>
      <project
        is-cover
        img-src="/imgs/media/marshall_1.jpg"
        title="Honors Student Wins Marshall Scholarship"
        subtitle="Northeastern News, 5 December 2014"
      >
        <div>
          <p>"Julia Ebert, S’15, has won a Marshall Scholarship to pursue a one-​​year master’s of research in bioengineering at Imperial College London starting in the fall.</p>
          <p>"Founded by the British government in 1953 to commemorate the Marshall Plan, the post­graduate scholarship allows up to 40 intellectually distinguished American students to study in the United Kingdom each year."</p>
          <icon-link
            icon="newspaper"
            to="http://news.northeastern.edu/2014/12/juliaebertmarshallscholarship/"
          >Read article</icon-link>
        </div>
      </project>
      <project
        is-cover
        img-src="/imgs/media/research_video_small.png"
        title="Stories to Inspire: Julia Ebert"
        subtitle="Northeastern University Scholars Program"
      >
        <div>
          <p>"Behavioral neuroscience student and Goldwater Scholar, Julia Ebert, discusses her research."</p>
          <icon-link icon="movie" :to="'https://vimeo.com/108164841'">Watch video</icon-link>
        </div>
      </project>
      <project
        is-cover
        img-src="/imgs/media/goldwater.jpg"
        title="Honors Student Named Goldwater Scholar"
        subtitle="Northeastern News, 24 April 2013"
      >
        <div>
          <p>"Julia Ebert, a third-​​year behavioral neuroscience major, has been awarded a prestigious Barry M. Goldwater Scholarship. The merit-​​based scholarship is awarded annually to 300 college sophomores and juniors nationwide who are studying science, engineering, or mathematics. Scholarship nominees must demonstrate prior experience in a research setting and submit a proposal to the Foundation Board of Trustees based on work that has advanced their sfield of study and furthered their career objectives."</p>
          <icon-link
            icon="newspaper"
            to="http://news.northeastern.edu/2013/04/honors-student-named-goldwater-scholar"
          >Read article</icon-link>
        </div>
      </project>
    </div>
  </primary-section>
</template>

<script>
import IconLink from "~/components/IconLink.vue";
import Project from "~/components/Project.vue";
import PrimarySection from "~/components/PrimarySection.vue";

export default {
  components: {
    PrimarySection,
    Project,
    IconLink
  }
};
</script>