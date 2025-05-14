<template>
  <primary-section
    :title="title"
    subtitle="Full stack robotics"
    texture="circuit-board"
  >
    <template #intro>
      <p>I am interested in using bio-inspiration to improve robotics. Biological systems, from cellular organization to ant colonies to human society, are able to produce complex behavior and structures at scales unachievable by a (relatively simple) individual. In addition, humans and animals are able to learn and adapt much quicker than state-of-the-art robots.</p>

      <p>I want to develop robots that draw from biology to learn and work collectively. Striving for minimal systems, can also help us understand the fundamental principles underlying behavior. A budding interest is connecting these approaches to distributed problems outside robotics, such as in satellite constellations.</p>
    </template>
    <div>
      <project
        is-cover
        img-src="/imgs/research/kilobot-decisions.jpg"
        title="Collective Perception and Decision Making in a Robot Swarm"
        subtitle="Advisor: Prof. Radhika Nagpal, Harvard University"
      >
        <p>This research aims to improve the ability of a large group of robots to perceive and classify their environment by employing robots with different perceptual skills. The ability to make collective decisions is a critical component to developing complex collective behavior and intelligence and can contribute to the broader challenge of translating global goals to local rules.</p>
        <p>In a first paper, we demonstrated that a bio-inspired algorithm that allowed a collective of Kilobots to discriminate between multiple binary-state features simultaneously. We also explored strategies for allocating robots between features, finding approaches that proved successful even when the initial distribution of robots across features was poor.</p>
        <p>Currently, I am developing a more general framework for distributed Bayesian decision-making in robots.</p>
        <template #results>
          <publication-list highlight-author="Ebert" :pub-key-filter="['ebert2020icra', 'ebert2018aamas']"/>
        </template>
      </project>

      <project
        is-cover
        img-src="/imgs/research/llnl.svg"
        title="Collaborative Autonomy for Space Situational Awareness"
        subtitle="Advisor: Dr. Michael Schneider, Lawrence Livermore National Laboratory"
      >
        <p>Tracking satellites is an important component of space situational awareness (SSA). However, current ground-based tracking approaches rely on centralized detection and require hours to accurately estimate an orbit. A constellation of low-cost, autonomous cube satellites could provide a fast and robustly decentralized architecture for SSA. We propose distributed particles filters as a method to iteratively refine orbit estimates with low communication bandwidth. We demonstrate the feasibility of this approach by implementing our algorithm in simulation. This simulator can also be used to evaluate the parameter space for future satellite constellation design, as well as test the system's robustness to failures.</p>
        <template #results>
          <publication-list highlight-author="Ebert" :pub-key-filter="['ebert2018llnl']"/>
        </template>
      </project>

      <project
        is-cover
        img-src="/imgs/research/larvabots.jpg"
        title="LARVAbots: Locomotion of Autonomous Robots Via Aggregation"
        subtitle="Advisor: Prof. Radhika Nagpal, Harvard University"
      >
        <p>Sawfly larva move together in a large aggregate, possibly giving them energetic advantages for reduced movement effort, exploiting the sensing of a few individuals, avoiding losing members of the collective, or overcoming obstacles.</p>
        <p>I designed and built a group of larva-inspired robots capable of similar collective movement. These LARVAbots can maintain an aggregate as they move and overcome obstacles by exploiting the shape of the group. Currently, I am investigating whether their collective behavior can result in greater movement efficiency than the movement of individual robots.</p>
        <p>This started as a project in the MIT course How To Make (Almost) Anything. You can <a href="http://fab.cba.mit.edu/classes/863.17/Harvard/people/julia-ebert/project/">read more about the inital project development here.</a></p>
      </project>

      <project
        video-src="/video/research/lopes.mp4"
        title="Cooperative Exoskeleton Control for Human Balance Recovery"
        subtitle="Advisors: Prof. Etienne Burdet and Dr. Ildar Farkhatdinov, Imperial College London"
      >
        <p>Maintaining balance in the face of perturbations is essential to walking and standing. For my masters thesis, I developed controls for LOPES (LOwer-extremity Powered ExoSkeleton, University of Twente) to assist humans with balance recovery after perturbations, using a combination of feed-forward and feedback control (such as hip torques and a PD controller). We found that even simple, single-joint torques are sufficient to reduce the time to a recovery movement and the energy used by subjects in recovery.</p>
        <template #results>
          <publication-list highlight-author="Ebert" :pub-key-filter="['ebert2016eurohaptics', 'farkhatdinov2019']"/>
        </template>
      </project>

      <project
        is-padded
        img-src="/imgs/research/contraction-stability.png"
        title="Stability and Predictability in Human Control of Complex Objects"
        subtitle="Advisor: Prof. Dagmar Sternad, Northeastern University"
      >
        <div>
          <p>We examined human control of physical interaction with objects that exhibit complex dynamics, hypothesizing that humans exploited stability properties of the human-object interaction. Using a simplified 2D model for carrying a cup of coffee, we developed a virtual implementation to identify human control strategies. The specific task was to transport the cart-pendulum model of a cup of coffee to a target, as fast as possible, while accommodating assistive and resistive perturbations. To assess trajectory stability, we applied contraction analysis. We showed that when the perturbation was assistive, humans absorbed the perturbation by controlling cart trajectories into a contraction region prior to the perturbation. When the perturbation was resistive, subjects passed through a contraction region following the perturbation. Entering a contraction region stabilizes performance and makes the dynamics more predictable. This human control strategy could inspire more robust control strategies for physical interaction in robots.</p>
        </div>
        <template #results>
          <publication-list
            highlight-author="Ebert"
            :pub-key-filter="['bazzi2018icra', 'bazzi2018chaos']"
          />
        </template>
      </project>

      <project
        img-src="/imgs/research/bimanual_small.jpg"
        title="Bimanual Learning and Retention"
        subtitle="Advisor: Prof. Dagmar Sternad, Northeastern University"
      >
        <div>
          <p>
            Participants were asked to perform a task in which one arm is moved rhythmically while the other makes fast, discrete movements when cued.
            Over 20 sessions of practice, participants learned the task asymmetrically: while they learned to make much faster discrete movements, they failed to attenuate the perturbation these discrete movements caused in the rhythmic arm. After 6 months, subjects retained the skills they learned, including the asymmetry.
          </p>
          <p>I proposed this research in my application the Barry Goldwater Scholarship and conducted the work for my undergraduate honors thesis. It was also funded by two Provost Undergraduate Research Awards.</p>
        </div>
        <template #results>
          <publication-list highlight-author="Ebert" :pub-key-filter="['ebert2015ncm']"/>
        </template>
      </project>

    </div>
  </primary-section>
</template>

<script setup>
import Project from "~/components/Project.vue";
import PublicationList from "~/components/PublicationList.vue";
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import { usePageTitle } from '~/composables/usePageTitle';
import { ref } from 'vue';

const title = ref("Research");

useHead({
  title: usePageTitle(title.value),
  meta: [{ hid: "research" }],
});
</script>
