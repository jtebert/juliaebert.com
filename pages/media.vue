<template>
<page-content
    title="Media"
    :hasSection="false"
    >
    <div slot="content">
        <project
          :img-src="'/imgs/media/robotstravaganza.jpg'"
          title="Robotstravaganza"
          subtitle="Brains On! Podcast">
              <div slot="content">
                <p>
                  I was a guest on a live show of Brains On! (a science
                  podcast for kids) at the Cambridge Science Festival.
                  I showed off my LARVAbots and talked about bioinspired
                  collective robotics.
                </p>
                <icon-link
                  icon="radio"
                  :to="'https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza'">
                  Listen
                </icon-link>
              </div>
        </project>
        <project
          :img-src="'/imgs/media/health_innovators.png'"
          img-align="right"
          title="Interview at TELHack NHS Hackathon"
          subtitle="Health Innovators TV">
              <div slot="content">
                  <p>
                    "TELHack innovators speak about the inspiration behind
                    their idea, challenges along the way and how their
                    innovation will help improve patient care."
                  </p>
                  <icon-link
                    icon="video"
                    :to="'http://www.healthinnovators.tv/detail/videos/innovation-live/video/4651670881001/interview-with-suture-score-nhs-telhack?autoStart=true'">
                    Watch Video
                  </icon-link>
              </div>
        </project>
        <project
          :img-src="'/imgs/media/marshall_1_small.jpg'"
          title="Honors Student Wins Marshall Scholarship"
          subtitle="Northeastern News, 5 December 2014">
              <div slot="content">
                <p>
                  "Julia Ebert, S’15, has won a Marshall Scholarship to
                  pursue a one-​​year master’s of research in bioengineering
                  at Imperial College London starting in the fall.</p>
                <p>
                  Founded by the British government in 1953 to commemorate
                  the Marshall Plan, the post­graduate scholarship allows up
                  to 40 intellectually distinguished American students to
                  study in the United Kingdom each year."
                </p>
                <icon-link
                  icon="newspaper"
                  :to="'http://news.northeastern.edu/2014/12/juliaebertmarshallscholarship/'">
                  Read Article
                </icon-link>
              </div>
        </project>
        <project
          :img-src="'/imgs/media/research_video_small.png'"
          img-align="right"
          title="Stories to Inspire: Julia Ebert"
          subtitle="Northeastern University Scholars Program">
              <div slot="content">
                <p>
                  "Behavioral neuroscience student and Goldwater Scholar,
                  Julia Ebert, discusses her research."
                </p>
                  <icon-link
                    icon="video"
                    :to="'https://vimeo.com/108164841'">
                    Watch Video
                  </icon-link>
              </div>
        </project>
        <project
          :img-src="'/imgs/media/goldwater_small.jpg'"
          title="Honors Student Named Goldwater Scholar"
          subtitle="Northeastern News, 24 April 2013">
              <div slot="content">
                <p>
                  "Julia Ebert, a third-​​year behavioral neuroscience major,
                  has been awarded a prestigious Barry M. Goldwater
                  Scholarship. The merit-​​based scholarship is awarded
                  annually to 300 college sophomores and juniors nationwide
                  who are studying science, engineering, or mathematics.
                  Scholarship nominees must demonstrate prior experience in
                  a research setting and submit a proposal to the Foundation
                  Board of Trustees based on work that has advanced their
                  field of study and furthered their career objectives."
                </p>
                  <icon-link
                    icon="newspaper"
                    :to="'http://news.northeastern.edu/2013/04/honors-student-named-goldwater-scholar'">
                    Read Article
                  </icon-link>
              </div>
        </project>
    </div>
</page-content>

</template>

<script>
import IconLink from "~/components/IconLink.vue";
import PageContent from "~/components/PageContent.vue";
import Project from "~/components/Project.vue";

export default {
  components: {
    PageContent,
    Project,
    IconLink
  }
};
</script>