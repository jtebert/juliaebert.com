<template>
    <div class="resume">
        <div class="resume-header is-print-only">
            <!-- <img class="logo" src="/imgs/logos/logo-black.svg"> -->
            <div class="name">
                <h1>Julia Ebert</h1>
                <p class="subtitle">
                    PhD candidate in computer science, seeking to create robust, autonomous multi-robot systems.
                </p>
            </div>
            <div class="links">
                <icon-link to="https://juliaebert.com" icon="web" size="">juliaebert.com</icon-link>
                <icon-link
                    to="mailto:julia@juliaebert.com"
                    icon="email"
                    size=""
                >julia@juliaebert.com</icon-link>
                <icon-link
                    to="https://github.com/jtebert"
                    icon="github-circle"
                    size=""
                >github.com/jtebert</icon-link>
            </div>
        </div>

        <div slot="content">

            <h2>Education</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University"
                subtitle='PhD Candidate in Computer Science<br>MS in Computer Science'
                dates='2021 (expected)<br>2019'
                :tasks="[
                    'Department of Energy Computation Science Graduate Fellow (DOE CSGF) &bull; Siebel Scholar &bull; 3.96 GPA',
                    'Thesis: <i>A Framework for Distributed Perception and Decision-making in Autonomous Robot Collectives</i>']"
            ></cv-entry>
            <cv-entry
                location="London, UK"
                title="Imperial College London"
                dates='2016'
                subtitle='Master of Research in Bioengineering, with Distinction'
                :tasks="[
                    'Marshall Scholar',
                    'Thesis: <i>Assisting Balance Recovery with a Lower Limb Exoskeleton</i>']"
            ></cv-entry>
            <cv-entry
                location="Boston, MA"
                title="Northeastern University"
                subtitle="BS in Behavioral Neuroscience, Minor in Computer Science"
                dates='2015'
                :tasks="[
                    'Goldwater Scholar &bull; summa cum laude &bull; 3.98 GPA',
                    'Honors Thesis: <i>Asymmetric Learning in an Asymmetric Bimanual Task</i>']"
            ></cv-entry>

            <h2>Skills</h2>

            <cv-skill
                category="Computer Science"
                :skills="[
                'Linux', 'Python (including NumPy, Pandas, Django)', 'C/C++ (including OpenMP, AVR, Arduino, embedded programming)', 'Database design', 'MATLAB', 'JavaScript (including Vue.js)', 'LaTeX', 'Java']"
            ></cv-skill>
            <cv-skill
                category="Engineering & Fabrication"
                :skills="[
                'Computer-aided design (OnShape, Fusion 360)', 'Electronics design (Eagle) and production', '3D printing', 'CNC milling', 'Soldering', 'Laser cutting', 'Sewing', 'Molding and casting', 'Vinyl cutting']"
            ></cv-skill>

            <h2>Experience</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University Self-Organizing Systems Research Group, <span>Prof. Radhika Nagpal</span>"
                dates='2016 --'
                subtitle='PhD research assistant'
                :tasks="[
                    'Developing a framework for collective spatial decision-making in simulated and physical robot collectives. Includes developing bio-inspired and Bayesian decision and movement algorithms, and robust low-bandwidth communication.',
                    'Created Kilosim, an open-source multi-robot simulator (C++) capable of efficiently simulating hundreds of robots at up to 1000x real time.',
                    'Contributing to implementation of heterogeneous robot swarm in microgravity.',
                    'Designing and manufacturing LARVAbot: a collective of robots to perform aggregate locomotion, inspired by the movement of sawfly larvae. Includes designing custom PCB, embedded programming, CAD and 3D printing of robot, and algorithm design for aggregate movement.'
                     ]"></cv-entry>

            <cv-entry
                location="Livermore, CA"
                dates='2018 --'
                title="Lawrence Livermore National Laboratory, <span>Dr. Michael Schneider</span>"
                subtitle="Summer practicum, ongoing collaboration"
                :tasks="[
                    'Designing multi-agent algorithms for orbit tracking (space situational awareness, SSA) and maneuver detection with satellite constellations.',
                    'Programmed, refactored, and documented research codebase (Python) for SSA, now used extensively by SSA researchers at LLNL.',
                    'Developed a simulator and visualization tools (Python) for collective orbit observation by low earth orbit satellites.',
                ]"></cv-entry>

            <cv-entry
                location="London, UK"
                title="Imperial College Human Robotics Group, <span>Prof. Etienne Burdet and Dr. Ildar Farkhatdinov</span>"
                subtitle='Post-graduate research assistant'
                dates='2015 -- 2016'
                :tasks="[
                    'Developed algorithms for human-robot co-control of the LOPES exoskeleton in standing a walking balance recovery. Tested with human participants and modeled in Simulink.']"
            ></cv-entry>
            <!-- <span class="page-break"></span> -->
            <cv-entry
                location="Boston, MA"
                title="Northeastern University Action Lab, <span>Prof. Dagmar Sternad</span>"
                dates='2011 -- 2015'
                subtitle='Undergraduate research assistant, including 6-month co-op'
                :tasks="[
                     'Programmed HapticMaster robot (C++) for human-subject experiments on prediction and stability in control of objects with complex dynamics; conducted pilot experiments.',
                     'Designed and programmed (Matlab) experiments to assess ability of humans to learn and retain a motor task with rhythmic and discrete components. Conducted multi-month data collection (including with EEG) and analyzed results for Honors thesis.',
                     'Analyzed data (Matlab) to assess the effect of a prolonged motor experiment on cognitive fatigue in human subjects.',]"
            ></cv-entry>
            <cv-entry
                location="Nahant, MA"
                title="Northeastern University Marine Science Center, <span>Prof. Joseph Ayers</span>"
                dates='May -- Aug. 2015'
                subtitle='Summer research assistant'
                :tasks="[
                     'Contributed to development of flex-sensing antennae for lobster-inspired robot.',
                     'Developed neuron-based biomimetic control (LabView) for using antennae to adjust robot control in response to water currents (rheotaxis).']"
            ></cv-entry>
            <cv-entry
                location="Watertown, MA"
                title="Interactive Motion Technologies"
                dates='July -- Sept. 2014'
                subtitle='Software development co-op'
                :tasks="[
                    'Developed a backend and interface (Python + Django) for integrating clinical stroke assesment tools into a rehabilitation robot.']"
            ></cv-entry>
            <cv-entry
                location="Tübingen, DE"
                title="Max Planck Institute for Intelligent Systems, <span>Prof. Stefan Schaal</span>"
                subtitle='Research co-op'
                dates='July -- Dec. 2013'
                :tasks="[
                     'Designed and programmed a learning task in which subjects learned to map high-dimensional hand joint movements to move a 2D cursor, and conducted pilot experiments.']"
            ></cv-entry>

            <h2>Teaching & Outreach</h2>
            <cv-award date='2021' award='<b>Co-supervisor,</b> ETH masters student thesis'></cv-award>
            <cv-award date='Summer 2019' award='<b>REU mentor</b> for Kilobot research and outreach project'></cv-award>
            <cv-award date='Fall 2018, Fall 2019' award='<b>Teaching staff,</b> How To Make (Almost) Anything, Harvard section'></cv-award>
            <cv-award
                date="Nov. 2018"
                award="<b>Speaker,</b> Science in the News fall lecture series: &quot;Brains and Bodies: How to Make Smart Robots&quot;"
                link="http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/"
            ></cv-award>
            <cv-award
                date='Spring 2018'
                award='<b>Teaching fellow,</b> Harvard CS 189: Autonomous Robot Systems'
                link='https://canvas.harvard.edu/courses/37276'></cv-award>
            <cv-award
                date="April 2018"
                award="<b>Guest,</b> <i>Brains On!</i> science podcast live show"
                link="https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza"></cv-award>
            <cv-award date='2014 -- 2015' award='<b>Teaching assistant,</b> Northeastern CS 2500: Fundamentals of Computer Science (2 semesters)'></cv-award>


            <h2>Publications</h2>

            <publication-list
                class="is-print-only"
                highlight-author="Ebert"
                :type-filter="['inproceedings', 'article']"
                :showLinks="false"
            ></publication-list>
            <publication-list
                class="is-screen-only"
                highlight-author="Ebert"
                :type-filter="['inproceedings', 'article']"
                :showLinks="true"
            ></publication-list>

        </div>
    </div>
    <!-- Co-developed and programmed labs and assignments for upper-level undergraduate course (Turtlebot robots programmed with Python and ROS) -->
</template>

<script>
import PublicationList from "~/components/PublicationList.vue";
import CvEntry from "~/components/cv/CvEntry.vue";
import CvAward from "~/components/cv/CvAward.vue";
import CvSkill from "~/components/cv/CvSkill.vue";
import IconLink from "~/components/IconLink.vue";

export default {
  components: {
    PublicationList,
    CvEntry,
    CvAward,
    CvSkill,
    IconLink,
  },
};
</script>
