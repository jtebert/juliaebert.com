<template>
    <div>
        <div v-if="isPaper" class="cv-header">
            <img class="logo" src="/imgs/logos/logo-black.svg">
            <div class="name">
                <h1>Julia Ebert</h1>
                <p class="subtitle">PhD Candidate &bull; Robotics Researcher</p>
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
                dates="2016 --"
                title="Harvard University"
                subtitle="PhD Candidate in Computer Science<br>
                          Advisor: Prof. Radhika Nagpal"
            ></cv-entry>
            <cv-entry
                dates="2016"
                location="London, UK"
                title="Imperial College London"
                subtitle="Master of Research in Bioengineering, with Distinction<br>
                    Advisors: Prof. Etienne Burdet, Dr. Ildar Farkhatdinov<br>
                    Thesis: <i>Assisting Balance Recovery with a Lower Limb Exoskeleton</i>"
            ></cv-entry>
            <cv-entry
                location="Boston, MA"
                dates="2015"
                title="Northeastern University"
                subtitle="BS in Behavioral Neuroscience, Minor in Computer Science<br>
                    GPA: 3.98 / 4.0, summa cum laude<br>
                    Honors Thesis: <i>Asymmetric Learning in an Asymmetric Bimanual Task</i>"
            ></cv-entry>
            <h2>Research</h2>
            <cv-entry
                location="Cambridge, MA"
                title="Harvard University Self-Organizing Systems Research Group"
                subtitle="Prof. Radhika Nagpal"
                :tasks="[
                    {date: '2017 --',
                     task: 'LARVAbot: Locomotion of autonomous robots via aggregation'},
                    {date: '2016 --',
                     task: 'Multi-feature perception and decision making in robot collectives'}]"
            ></cv-entry>
            <cv-entry
                location="Livermore, CA"
                title="Lawrence Livermore National Laboratory"
                subtitle="Dr. Michael Schneider"
                :tasks="[
                    {date: '2018 --',
                     task: 'Collaborative Autonomy for Space Situational Awareness'}]"
            ></cv-entry>
            <cv-entry
                location="London, UK"
                title="Imperial College Human Robotics Group"
                subtitle="Prof. Etienne Burdet and Dr. Ildar Farkhatdinov"
                :tasks="[
                    {date: '2015 -- 2016',
                     task: 'Co-control of balance recovery in a lower limb exoskeleton'}]"
            ></cv-entry>
            <cv-entry
                location="Boston, MA"
                title="Northeastern University Action Lab"
                subtitle="Prof. Dagmar Sternad"
                :tasks="[
                    {date: '2014 -- 2015',
                     task: 'Prediction and stability in control of objects with complex dynamics'},
                    {date: '2012 -- 2015',
                     task: 'Learning and long-term retention of an asymmetric bimanual task'},
                    {date: '2011 -- 2012',
                     task: 'Effects of central fatigue on cognitive and motor performance'},]"
            ></cv-entry>
            <cv-entry
                location="Nahant, MA"
                title="Northeastern University Marine Science Center"
                subtitle="Prof. Joseph Ayers"
                :tasks="[
                    {date: 'May -- Aug. 2015',
                     task: 'Neuro-inspired rheotaxis and antenna design in a robotic lobster'}]"
            ></cv-entry>
            <cv-entry
                location="Watertown, MA"
                title="Interactive Motion Technologies"
                :tasks="[
                    {date: 'July -- Sept. 2014',
                     task: 'Integrated stroke assessment software in rehabilitation robotics'}]"
            ></cv-entry>
            <cv-entry
                location="Tübingen, DE"
                title="Max Planck Institute for Intelligent Systems"
                subtitle="Prof. Stefan Schaal"
                :tasks="[
                    {date: 'July -- Dec. 2013',
                     task: 'Learning and exploration in a novel dimensionality-reduction task'}]"
            ></cv-entry>
            <h2>Grants and Scholarships</h2>
            <cv-award
                date="2016"
                award="Department of Energy Computational Science Graduate Fellowship (DOE CSGF)"
            ></cv-award>
            <cv-award date="2015" award="Marshall Scholarship"></cv-award>
            <cv-award
                date="2014"
                award="Northeastern Provost Undergraduate Advanced Research Award"
            ></cv-award>
            <cv-award date="2013" award="Barry Goldwater Scholarship"></cv-award>
            <cv-award date="2013" award="Northeastern Provost Undergraduate Research Award"></cv-award>
            <cv-award date="2013" award="DAAD Undergraduate Scholarship"></cv-award>
            <cv-award date="2013" award="Northeastern Presidential Global Scholarship"></cv-award>
            <cv-award date="2010" award="Northeastern National Merit Scholarship"></cv-award>
            <h2>Awards</h2>
            <cv-award date="2018" award="Distinction in Teaching, Harvard University"></cv-award>
            <cv-award date="2016" award="Finalist, Hertz Fellowship"></cv-award>
            <cv-award
                date="2016"
                award="Honorable Mention, National Science Foundation Graduate Research Fellowship Program (NSF GRFP)"
            ></cv-award>
            <cv-award date="2015" award="Northeastern University Honors Program Distinction"></cv-award>
            <cv-award date="2015" award="Northeastern Honors in Behavioral Neuroscience"></cv-award>
            <cv-award
                date="2015"
                award="Northeastern Alex Skavenski Award for Behavioral Neuroscience"
            ></cv-award>
            <cv-award
                date="2015"
                award="Northeastern Sears B. Condit Award for academic achievement"
            ></cv-award>
            <cv-award date="2010 -- 2015" award="Northeastern Dean’s List (6 semesters)"></cv-award>
            <cv-award date="2015" award="Finalist; Rhodes, Fulbright, and Mitchell Scholarships"></cv-award>
            <h2 v-if="isPaper">Papers</h2>
            <publication-list
                v-if="isPaper"
                highlight-author="Ebert"
                :type-filter="['inproceedings', 'article']"
                :showLinks="false"
            ></publication-list>
            <h2 v-if="isPaper">Conference Abstracts and Posters</h2>
            <publication-list
                v-if="isPaper"
                highlight-author="Ebert"
                :type-filter="['poster']"
                :showLinks="false"
            ></publication-list>
            <h2 v-if="!isPaper">Publications</h2>
            <p v-if="!isPaper">
                See
                <a v-scroll-to="'#publications'">publications section</a>
            </p>
            <!-- <h2>Talks</h2>
            <publication-list
                highlight-author="Ebert"
                :type-filter="['talk']"
                :showLinks="false">
            </publication-list>
            - UQ lecture
            - CS 189 guest lecture
            - AAMAS 2018?
            - Wyss molecular robotics
            -->
            <h2>Teaching</h2>
            <cv-entry
                location="Cambridge, MA"
                title="Harvard University"
                :tasks="[
                    {date: 'Fall 2018',
                     task: '<b>Teaching Staff,</b> How To Make (Almost) Anything, Harvard section'},
                    {date: 'Spring 2018',
                     task: '<b>Teaching Fellow,</b> CS 189: Autonomous Robot Systems'}]"
            ></cv-entry>
            <cv-entry
                location="Boston, MA"
                title="Northeastern University"
                :tasks="[
                    {date: '2014 -- 2015',
                     task: '<b>Teaching Assistant,</b> CS 2510: Fundamentals of Computer Science (2 semesters)'},
                    {date: '2012 -- 2014',
                     task: '<b>Tutor,</b> CS 2510: Fundamentals of Computer Science (3 semesters)'},
                    {date: '2011 -- 2013',
                     task: '<b>Undergraduate Mentor,</b> Proactive Recruitment in Science and Mathematics (PRISM)'}]"
            ></cv-entry>
            <h2>Outreach and Service</h2>
            <cv-award date="2018" award="Robot Design Judge, FIRST LEGO League Newton Qualifier"></cv-award>
            <cv-award
                date="2018"
                award="Speaker, Science in the News fall lecture series: &quot;Brains and Bodies: How to Make Smart Robots&quot;"
            ></cv-award>
            <cv-award date="2018" award="Guest, <i>Brains On!</i> science podcast live show"></cv-award>
            <cv-award date="2017, 2018" award="Volunteer, Boston Public Schools Science Fair"></cv-award>
            <cv-award date="2016" award="Volunteer, EuroHaptics 2016"></cv-award>
            <cv-award date="2010 -- 2015" award="Volunteer, Northeastern Civic Engagement Program"></cv-award>
            <cv-award date="2014" award="Tutor team leader, TechBoston Academy"></cv-award>
            <cv-award
                date="2014"
                award="Teacher, NEU Splash Program. Class: &quot;This is your Brain&quot;"
            >
                <cv-award date="2011 -- 2013" award="Volunteer, Brigham and Women's Hospital"></cv-award>
                <cv-award
                    date="2010 -- 2011"
                    award="Mentor, Massachusetts General Hospital Youth Program"
                ></cv-award>
                <h2>Skills</h2>
                <cv-skill
                    category="Programming"
                    :skills="[
                    'Python (including Django, NumPy)', 'MATLAB', 'C/C++ (including OpenMP, AVR, Arduino)',
                    'HTML/CSS', 'LaTeX', 'JavaScript', 'Java']"
                ></cv-skill>
                <cv-skill
                    category="Fabrication"
                    :skills="[
                    'Laser cutting', '3D printing', 'Vinyl cutting', 'CNC milling, ShopBot',
                    'Electronics design (Eagle) and production', 'Soldering', 'Sewing',
                    'Molding and casting']"
                ></cv-skill>
                <cv-skill
                    category="Other"
                    :skills="[
                    'Computer-aided design (OnShape)', 'Database design', 'Linux',
                    'Embedded programming', '3D motion capture',
                    'Kinematic and EEG data collection in human subjects']"
                ></cv-skill>
                <h2>Relevant Coursework</h2>
                <cv-skill
                    category="Computer Science"
                    :skills="['Biologically-inspired Multi-agent Systems', 'Distributed Systems',
                    'Machine Learning', 'Network Algorithms', 'Computational Neurodynamics',
                    'Artificial Intelligence', 'Robotics']"
                ></cv-skill>
                <cv-skill
                    category="Science and Engineering"
                    :skills="[
                    'How to Make (Almost) Anything', 'Biomimetics', 'Comparative Neurobiology',
                    'Human Neuroanatomy', 'Biochemistry', 'Genetics and Molecular Biology',
                    'Organic Chemistry']"
                ></cv-skill>
                <cv-skill
                    category="Mathematics"
                    :skills="[
                    'Stochastic Methods for Data Analysis, Inference and Optimization', 'Biological Signal Processing', 'Statistics and Data Analysis',
                    'Multivariable Calculus', 'Linear Algebra', 'Differential Equations']"
                ></cv-skill>
                <h2>Activities and Interests</h2>
                <cv-skill
                    category="Sport"
                    :skills="[
                    'Harvard University curling team', 'Imperial College and Goodenough College fencing clubs', 'Cycling']"
                ></cv-skill>
                <cv-skill
                    category="Music"
                    :skills="[
                    'Northeastern University pep band, drumline, and wind ensemble', 'Clarinet', 'Saxophone', 'Percussion']"
                ></cv-skill>
                <cv-skill
                    category="Other"
                    :skills="[
                    'Web design and development', 'Graphic design', 'Writing', 'Baking']"
                ></cv-skill>
            </cv-award>
        </div>
    </div>
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
    IconLink
  },
  props: {
    isPaper: { default: false }
  }
};
</script>