<template>
<div>
    <project is-cover
      img-src="/imgs/research/kilobots3.jpg"
      title="Collective Perception and Decision Making in a Robot Swarm"
      subtitle="Advisor: Prof. Radhika Nagpal, Harvard University">
      <p>
        This research aims to improve the ability of a large group of robots to
        perceive and understand their environment by employing agents with
        different perceptual skills.
      </p>
      <div slot="results">
        <publication-list
          highlight-author="Ebert"
          :pub-key-filter="['ebert2018aamas']">
        </publication-list>
      </div>
    </project>

    <project is-cover
      img-src="/imgs/research/llnl.svg"
      title="Collaborative Autonomy for Space Situational Awareness"
      subtitle="Advisor: Dr. Michael Schneider, Lawrence Livermore National Laboratory">
      <p>
        Tracking satellites is an important component of space situational awareness (SSA). However, current ground-based tracking approaches rely on centralized detection and require hours to accurately estimate an orbit. A constellation of low-cost, autonomous cube satellites could provide a fast and robustly decentralized architecture for SSA. We propose distributed particles filters as a method to iteratively refine orbit estimates with low communication bandwidth.  We demonstrate the feasibility of this approach by implementing our algorithm in simulation. This simulator can also be used to evaluate the parameter space for future satellite constellation design, as well as test the system's robustness to failures.
      </p>
      <div slot="results">
        <publication-list
          highlight-author="Ebert"
          :pub-key-filter="['ebert2018llnl']">
        </publication-list>
      </div>
    </project>

    <project
      img-src="/imgs/research/lopes_ii.png"
      title="Cooperative Exoskeleton Control for Human Balance Recovery"
      subtitle="Advisors: Prof. Etienne Burdet and Dr. Ildar Farkhatdinov, Imperial College London">
      <p>
        Maintaining balance in the face of perpurbations is essential to walking and standing. For my masters thesis, I developed controls for LOPES (LOwer-extremity Powered ExoSkeleton, University of Twente) to assist humans with balance recovery after perturbations, using a combination of feed-forward and feedback control (such as hip torques and a PD controller). We found that even simple, single-joint torques are sufficient to reduce the time to a recovery movement and the energy used by subjects in recovery.
      </p>
      <div slot="results">
        <publication-list
          highlight-author="Ebert"
          :pub-key-filter="['ebert2016eurohaptics']">
        </publication-list>
      </div>
    </project>

    <project is-padded
      img-src="/imgs/research/contraction-stability.png"
      title="Stability and Predictability in Human Control of Complex Objects"
      subtitle="Advisor: Prof. Dagmar Sternad, Northeastern University">
      <div>
        <p>
          We examined human control of physical interaction with objects that exhibit complex dynamics, hypothesizing that humans exploited stability properties of the human-object interaction. Using a simplified 2D model for carrying a cup of coffee, we developed a virtual implementation to identify human control strategies. The specific task was to transport the cart-pendulum model of a cup of coffee to a target, as fast as possible, while accommodating assistive and resistive perturbations. To assess trajectory stability, we applied contraction analysis. We showed that when the perturbation was assistive, humans absorbed the perturbation by controlling cart trajectories into a contraction region prior to the perturbation. When the perturbation was resistive, subjects passed through a contraction region following the perturbation. Entering a contraction region stabilizes performance and makes the dynamics more predictable. This human control strategy could inspire more robust control strategies for physical interaction in robots.
        </p>
      </div>
        <div slot="results">
          <publication-list
            highlight-author="Ebert"
            :pub-key-filter="['bazzi2018icra', 'bazzi2018chaos']">
          </publication-list>
        </div>
    </project>

    <project
      img-src="/imgs/research/bimanual_small.jpg"
      title="Bimanual Learning and Retention"
      subtitle="Advisor: Prof. Dagmar Sternad, Northeastern University">
      <div>
        <p>
          Participants were asked to perform a task in which one arm is moved rhythmically while the other makes fast, discrete movements when cued.
          Over 20 sessions of practice, participants learned the task asymmetrically: while they learned to make much faster discrete movements, they failed to attenuate the perturbation these discrete movements caused in the rhythmic arm. After 6 months, subjects retained the skills they learned, including the asymmetry.
        </p>
        <p>
          I proposed this research in my application the Barry Goldwater Scholarship and conducted the work for my undergraduate honors thesis. It was also funded by two Provost Undergraduate Research Awards.
        </p>
      </div>
        <div slot="results">
          <publication-list
            highlight-author="Ebert"
            :pub-key-filter="['ebert2015ncm']">
          </publication-list>
        </div>
    </project>

</div>
</template>

<script>
import Project from "~/components/Project.vue";
import PublicationList from "~/components/PublicationList.vue";

export default {
  components: {
    Project,
    PublicationList,
    Project
  }
};
</script>


<style lang="scss">
</style>
