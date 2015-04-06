'use strict';


angular.module('campaignWebsiteApp')
	.controller('EndorsementsCtrl', function ($rootScope, $scope, $route) {


        // Allows nav panel to highlight active tab
      	$rootScope.activeTab = $route.current.activeTab;
        $scope.panelVisible = false;


        // Set up Masonry
      	var $container = $('main.endorsements ul.js-masonry');
        $(window).resize(function() {
            var windWidth = $(window).width();
            $container.imagesLoaded(function() {
                if (windWidth < 600) {
                    var squareSide = $container.width();
                }
                else if (windWidth < 950) {
                    var squareSide = ($container.width() - (1*5)) / 2;
                }
                else if (windWidth < 1300) {
                    var squareSide = ($container.width() - (2*5)) / 3;
                }
                else {
                    var squareSide = ($container.width() - (3 * 5)) / 4;
                }
                $('li.endorsement').height(squareSide);
                $('li.highlight').height((squareSide * 2) + 5 - 94);
                $container.masonry({
                    columnWidth: squareSide,
                    itemSelector: '.block',
                    gutter: 5,
                    isAnimated: true,
                });
            });
        }).resize();


        // Endorsement panel sizing
        $(window).resize(function() {
            var rightPanelHeight = $(window).height() - $('header').height();
            $('div.endorse-panel').height(rightPanelHeight);
        }).resize();


        // For endorsement panel
        window.onclick = function() {
            if (!$scope.panelClicked && $scope.panelVisible) {
                $scope.panelVisible = false;
                $scope.panelClicked = false;
                // let angular know about the update
                $('li.block').fadeTo('fast', 1.0);
                $scope.$apply();
            }
            $scope.panelClicked = false;
        }


        // click event handler
        $scope.togglePanel = function(event, index) {
            if (!$scope.panelVisible) {
                $('li.block').fadeTo('fast', 0.6);
                $scope.selectedEndorsement = $scope.blocks[index];
            }
            else {
                $('li.block').fadeTo('fast', 1.0);
            }
            $scope.panelVisible = !$scope.panelVisible;
            
            // doesn't work without stopPropagation()
            event.stopPropagation();
        };


        // Endorsement list
        $scope.blocks = [
            {
                className: 'endorsement',
                firstName: 'Kenny Mok + Mackenzie Schneider',
                lastName: '',
                position: 'Financial Vice Presidents, ASG',
                text: 'Noah and Christina’s “Listen then Lead” vision for Northwestern will facilitate a truly collaborative and productive environment through which we can help our student groups. Faced with the task of creating change within a short period of time, we need to maintain a level of flexibility to adapt to problems as they arise. As VP for A-Status and B-Status Finances, we are excited to fully endorse their candidacy for the president and executive vice president roles, and we encourage you to do the same.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/Mackenzie_Kenny.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Joji',
                lastName: 'Syed',
                position: 'President, Students Consulting for Nonprofit Organizations',
                text: 'To me, a student leader is not someone who has dedicated their entire career at Northwestern to a particular student group or activity. A student leader is a well rounded individual--it is an individual who has devoted time to their academics, their extracurricular activities, their career, and their friends. A student leader is an individual who is able to find the optimal balance of being an active and engaged student. Noah Star and Christina Kim, two of my close friends and mentors, have done just that. They are real students--they care about their extracurriculars all while appreciating and experiencing many different aspects of the Northwestern experience. We need more leaders like this. As president of SCNO, often times I see young members struggling to find the optimal balance as they have a very narrow and skewed perception of leadership. By embracing well rounded leaders, we will redefine what it means to be a leader on this campus, and therefore, lay the foundation for a better (and happier) Northwestern. ',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JojiSyed.jpg'
            },
            
            {
                className: 'endorsement',
                firstName: 'Andrew',
                lastName: 'Green',
                position: 'Chief of Staff, ASG',
                text: 'I’ve had the pleasure of working with Noah and Christina on the ASG Executive Board, and I cannot think of two individuals who would be more qualified for these roles. Noah’s passion and commitment to representing the voices of students is exactly what ASG needs to be seen as a relevant part of the Northwestern Community. As the Chief of Staff, I worked very closely with the Executive Vice President to oversee internal project work, and I firmly believe that Christina’s demonstrated ability to execute and design projects that benefit students will make this ASG’s most productive year yet.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AndrewGreen.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Will',
                lastName: 'Ginsberg',
                position: 'Former Chief Operating Officer, Northwestern Student Holdings',
                text: 'ASG needs to be held to the highest standards in order to best serve the student body. Noah and Christina are proven leaders in the Northwestern community and are the only candidates who will successfully ensure that ASG is both accountable and accessible. Their platform and experience gives me confidence in the future of Northwestern\'s student government.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/WillGinsberg.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'SASA',
                lastName: '',
                position: 'South Asian Student Alliance',
                text: 'As members of SASA Executive Board, we proudly endorse Noah and Christina for ASG president and vice president. For too long ASG has been disconnected from student groups and the overall student body. Not only do Noah and Christina recognize that, but also their plan of action, which focuses on accountability, accessibility and opportunity, directly tackles that issue. We believe that Noah and Christina have the vision and drive to build a more inclusive and integrated Northwestern, and could not be happier to endorse them.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/SASA.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Leo',
                lastName: 'Zhu',
                position: 'President, CSA',
                text: 'I support Noah and Christina because they embody the passion in our student body. They have contributed so much to Northwestern before, so they are extremely in touch with the struggles that every student and student organization has faced. Furthermore, their platform for a better student government addresses so many important issues within ASG. By emphasizing what ASG can do for us, by listening, Noah and Christina will help students and groups grow. I sincerely believe that they can make a difference because of their drive to make this school a better place, and because they genuinely care. Their vision for a more open and welcoming ASG makes me excited for the future.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LeoZhu.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Daniel',
                lastName: 'Flores',
                position: 'Founder, NU Quest Scholars Network',
                text: 'Christina has been a committed Quest scholar before ASG even knew income inequality was an issue.  She has been an invaluable part of our community and has been our representation in ASG back when we had none.  Her unwavering loyalty and tireless support to our community is why I proudly endorse her today.  Northwestern needs an VP that truly understands the experiences of so many underrepresented voices on this campus, not individuals that claim they do. It would be a privilege to have one of our own be in a position to combat so many issues that we currently face.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/DanielFlores_.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Eliza',
                lastName: 'Abramson',
                position: 'Co-Executive Producer, Mayfest',
                text: 'What makes a student leader great, is not the groups that they are involved in, the number of projects they have led, or the amount of time they have spent on the third floor of Norris. What makes a great student leader is someone who is willing to question the status quo, push-back on pre-existing systems, and fight for the undergraduate students of Northwestern. Noah and Christina not only have the skills to advocate for students, but they are not afraid to listen to the not so positive realities and ask the tough but constructive questions that will drive our campus forward.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/ElizaAbramson.png'
            },
            {
                className: 'endorsement',
                firstName: 'Sowa',
                lastName: 'Imoisili',
                position: 'Former President, Allison Hall & Team Leader, SCNO',
                text: 'I\'m supporting Noah and Christina because I know they are the sort of leaders who put serving others first. They make it a point to actively listen to the student body and let students from all over campus, whether or not they are involved in ASG, have a say in the changes they want to see at NU. In addition to their passion for mental health and sustainability, Noah and Christina have impressed me in how they make it a point to engage communities outside of their own and make ASG more accessible to all students. I have no question that their leadership will make a positive impact on Northwestern.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/SowaImoisili.png'
            },
            {
                className: 'endorsement',
                firstName: 'Vicky',
                lastName: 'Ho',
                position: 'Co-Coordinator of Moderators, Sustained Dialogue & President, UPS ',
                text: 'I am so excited to endorse Noah and Christina as President and VP of ASG! Both Noah and Christina are incredibly passionate about and dedicated to getting student voices heard. They have the experience to understand how our student government functions in a way that best serves its students. I have watched both of them be personally involved in working on issues that affect people of all different backgrounds and work to increase the accessibility and inclusivity on our campus, something that I am very passionate about.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/VickyHo.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Antonio Jose',
                lastName: 'Vielma',
                position: 'President, Sigma Lambda Beta',
                text: 'As president of Sigma Lambda Beta, our organization strives to be a catalyst for change at Northwestern and in the community. We aim to be that home away from home and support system for students who come from backgrounds that differ from the majority of Northwestern students. With that in mind, I firmly believe that Noah and Christina have our best interests in mind by working to create a university that is more financially accessible for all.  It’s not always easy to put yourself in someone else’s shoes, but I’ve found Noah to be an empathetic listener and curious about every issue, no matter how minor it may seem.  Ever since meeting Christina during freshman year as a fellow Quest Scholar, I know how hard she’s worked through ASG and other initiatives to better the quality of life for low-income students at Northwestern. There are many different avenues to make a difference on this campus -- some, like myself, choose Greek life or professional development organizations, among others.  Noah and Christina have made the most of their time thus far, and I know they will continue to do make major changes on campus if elected ASG president and vice-president.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/AJ+Vielma.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Melody',
                lastName: 'Song',
                position: 'Co-Director, NU Community for Human Rights',
                text: 'Noah and Christina have impressed me with the way that they have actively engaged with communities outside of their own. They are incredibly passionate about making ASG more representative of all student interests, especially of underrepresented students and communities. Above all, Noah and Christina have shown that they are ready and willing to fight for the changes that need to be made. I have no doubt that together, they can leave a strong impact on Northwestern.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/Melody-Crop.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Molly',
                lastName: 'Shaheen',
                position: 'Former President, Form & Function',
                text: 'Northwestern needs student leadership that lives and breathes the culture, values and priorities that the greater university population shares. I am excited about Noah & Christina\'s hands-on approach to listening to students, meeting them in their own spaces and weaving values into every stage of community growth. ASG should make students and their organizations feel empowered and understood-- and I endorse Noah & Christina because that\'s exactly what their platform will accomplish. #ASGListen',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/MollyShaheen.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Erik',
                lastName: 'Baker',
                position: 'MARS Programming Chair & WNUR News Special Broadcast Director',
                text: 'I\'m supporting Noah and Christina because I trust them to advocate for students, challenge administrators, and produce real change in ASG from the bottom up. As an outsider to ASG, my experience of NU student government has primarily been one of frustration and disappointment. Noah and Christina\'s vision has convinced me that they have what it takes to lead ASG away from business as usual and empower students.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ErikBaker.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Maroua',
                lastName: 'Sallami',
                position: 'Co-Director, NU Community for Human Rights & President, Model Arab League',
                text: 'I support Christina and Noah because they genuinely want to make a difference in students’ experiences. At such an interesting time on campus where a lot of critical conversations are taking place, they both recognize ASG’s limits and have a plan to amplify the opinions of students’ experts rather than have ASG lead these conversations. I am confident they are a great choice for ASG and I am looking forward to all the fantastic things that they will do representing Northwestern.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MarouaSallami.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'Co-President, Points for a Purpose',
                text: 'I am voting for Noah and Christina for ASG President and Vice-President because I am confident that they will bring voice back to the student body. I trust that their plans will help allow ASG to meet the needs of students in a way that is representative of student opinions. Noah and Christina are actually interested in hearing what we have to say and developing concrete plans in response to them. I am particularly drawn to their emphasis on the need for increased accessibility to mental health resources, assistance for student groups, and financial support for low-income students. I trust that Noah and Christina will serve as excellent advocates for student needs and that their passion and leadership abilities will contribute to the betterment of the NU community.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/BryanBerger.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Michael',
                lastName: 'Graf',
                position: 'Co-Chair, Northwestern Community Building Initiative',
                text: 'I believe Noah and Christina are best equipped to lead ASG because they have an inclusive and encompassing definition of Northwestern community. I find their platform most persuasive when they describe their commitment to student accessibility - connecting student groups to one another and serving as a pillar of support, rather than the ultimate arbiter of projects at Northwestern. We deserve Noah and Christina because we need leaders who are passionate about serving every student and forging partnerships across our campus.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MichaelGraf.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Emily',
                lastName: 'Mannheimer',
                position: 'Former Vice President, Standards for PHA',
                text: 'In my role as Vice President of Standards for the Panhellenic Association last year, I was the liaison between the Panhellenic community and ASG, and Noah was who I worked with on the other end. He was innovative when I was adapting the role that sorority members play in ASG, and helped me to write changes to our own Panhellenic bylaws. I am certain that Noah and Christina have the skills to listen to the needs of the entire Northwestern community and respond to those needs in new and effective ways. I am proud to call them my friends and wholeheartedly endorse their campaign.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/EmilyMannheimer.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Maddie',
                lastName: 'Thurman',
                position: 'Former Prose Editor, PROMPT Literary Magazine',
                text: 'I had the opportunity to work with Noah when he served as a Peer Adviser this past year, and what stood out to me about Noah in particular was the respect he had for the position and how that translated to the care he took with his new students. To me, Noah and Christina\'s platform suggests that the respect they have for this university will reach and serve each of its individual members. I believe that Noah and Christina will be incredible assets to ASG, and by caring about the students that make up this school, they can better address the services, groups, and resources for these students. I am incredibly confident in their ability to serve this university and to serve this student body.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/MaddieThurman.jpg'
            },

            // {
            //     className: 'highlight',
            //     text: '"I am certain that Noah and Christina have the skills to to listen to the needs of the entire Northwestern community and respond to those needs in new and effective ways."',
            //     name: 'Emily Mannheimer'
            // },

            {
                className: 'endorsement',
                firstName: 'Ariel',
                lastName: 'Roitman',
                position: 'ASG Senator & Director of New Student Groups',
                text: 'I am incredibly proud to support Noah and Christina for ASG President and Vice President. Over the past year, I have had the honor of working closely with Noah in ASG Senate, and I\'ve witnessed his unparalleled commitment and dedication to making ASG a more open and accessible space to the entire NU community. Throughout his term, Noah has actively reached out to my community and has shown a true interest in hearing our concerns and taking into account our perspectives and ideas. I believe that both Noah and Christina have a proven track record of truly listening and effectively advocating for students. Their vision, leadership and experience allows me to confidently say that there is no one else I\'d rather see leading ASG the upcoming year.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArielRoitman.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Oskar',
                lastName: 'Melking',
                position: 'Founder of NU Spring Escape, RezEssentials & NSH Impact Week',
                text: 'Noah and Christina are the first ASG candidates I\'ve seen during my four years at NU to really understand what students want out of ASG. Students don\'t want an ASG that has its hand in everything that happens on campus, or an ASG that thinks it can and should do everything. They want an ASG that can empower students to do what students do best. Noah and Christina will ensure that ASG is accountable for key issues that affect the entire campus, while giving students and student groups the tools they need to succeed in their own endeavors.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/Oskar+Melking.JPG'
            },
            {
                className: 'endorsement',
                firstName: 'Neil',
                lastName: 'Dalvie',
                position: 'Former President, Delta Tau Delta',
                text: 'I have known Noah and Christina as leaders for a long time. Noah and I served a year as the vice president and president of our fraternity, and I learned a lot about Noah\'s passions, goals, and leadership style. I don\'t care as much about what exactly they will do within ASG, but I do know that Noah and Christina care deeply about listening to students. It\'s that simple, and that should matter to everybody. I strongly support Noah and Christina for ASG, a couple of normal students just tryna chill.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NeilDalvie.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Marie',
                lastName: 'Donaldson',
                position: 'Operations Director, Supplies for Dreams',
                text: 'I am endorsing Noah and Christina because I appreciate their intent to involve the entire student body in ASG processes.  ASG can be confusing to those on the outside, and actively working to involve the people it directly effects, like student group leaders, is a fantastic idea.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/MarieDonaldson.png'
            },

            {
                className: 'endorsement',
                firstName: 'Ben',
                lastName: 'Terdich',
                position: 'Former President, Lambda Chi Alpha',
                text: 'I endorse Noah and Christina because they understand the need for a revolution in the way that ASG relates to the student body, and because they know how to make it happen. As someone who is not involved with ASG, I have all too often joked with friends, "wait, what does ASG do again?" ASG does good work, but if even some student leaders don\'t know what\'s happening, there is a real problem. Noah and Christina\'s platform seeks to make ASG accountable and accessible to the people it represents so that students will have the opportunity to help their government make a tangible, positive impact on their NU experience.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/BenTerdich.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Luke',
                lastName: 'Bertolet',
                position: 'President, Delta Tau Delta & Director of Internal Affairs, LEND',
                text: 'On behalf of the brothers of Delta Tau Delta, I am honored to endorse our brother Noah Star and his running mate Christina Kim in their campaign. I have personally had the pleasure to work under Noah’s leadership as Vice President of our chapter. Noah’s ability to facilitate discussion is unparalleled, and his drive to find effective solutions has procured my utmost respect. I believe in Noah and Christina’s mission to end the disillusionment associated with ASG, and I am confident in their ability to make positive changes for the NU student body.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/LukeBertolet.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Josh',
                lastName: 'O\'Neil',
                position: 'Elder Senator',
                text: 'Noah and Christina are the right leaders for ASG. This is because they fundamentally understand Northwestern student concerns, and will actively seek to make ASG a more active and engaged student advocate. They understand that 12 free sessions at CAPS, the least offered in the Big Ten, is not enough. They understand that ASG committee members are not experts on sexual health and that ASG should tackle this issue by engaging the student experts in this field through a task force with MARS, College Feminists and SHAPE. They understand that ASG has the ability to bring about change in these areas of concern and become an accessible pillar of the Northwestern experience, but for that to happen ASG will need resilient, confident leaders. I’ve worked with Noah and Christina this year and seen both Noah and Christina listen then lead from senate reform to CourseDJ. Noah and Christina are the fearless leaders who will accomplish what they set out to do and I look forward to working with them going forward.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JoshONeil.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Emily',
                lastName: 'Shanker',
                position: 'Former Vice President of Social Standards, Delta Gamma',
                text: 'Noah and Christina have a great understanding of what it means to be a student leader at Northwestern. They are committed to actually making the changes that we as a community want, rather than relying on administrative action. As individuals, these two candidates are passionate about their work and genuine in the relationships they have built so far on and off campus. I fully believe in Noah and Christina\'s ability to improve our Northwestern community and I am excited to be working with them moving forward.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EmilyShanker.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Ross',
                lastName: 'Krasner',
                position: 'Incoming Co-President, Wildcats for Israel',
                text: 'As a senator, I have seen firsthand Noah and Christina’s leadership and fair-mindedness when tackling the toughest issues facing the Northwestern student body. These two will bring much needed accountability to ASG by setting attainable goals and bringing real change to Northwestern. They are willing to take a stand with the administration when necessary on behalf of the students.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RossKrasner.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Joey',
                lastName: 'Becker',
                position: 'Former Vice President of Standards, IFC',
                text: 'I am proud to endorse Noah and Christina for the upcoming ASG election. Over the past year, I served as Vice President of Standards for the Interfraternity Council, the liaison between IFC and ASG. In this role, I worked closely with Noah and saw his incredible passion for not only ASG, but the Northwestern community. Not only does Noah have great organizational knowledge and dedication to ASG and Northwestern, but he has a true capacity for innovation. I believe that Noah and Christina will make a great team, to ensure that the Northwestern community continues to improve.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/JoeyBecker.jpg' 
            },
            
            {
                className: 'endorsement',
                firstName: 'Jules',
                lastName: 'Cantor',
                position: 'Recruitment Chair, Delta Chi & Former President, Allison',
                text: 'I have interacted with Noah as a member of the Greek and Wildcat Welcome communities and have seen, in his roles as his chapter Vice President and as a Peer Adviser, that Noah is a passionate, effective, and dynamic leader.  Put simply, Noah is a difference maker who positively impacts all of the organizations to which he commits himself. One need not look farther than his recent performance as Speaker to see that he is exceptionally committed to ASG, to Northwestern, and to the entire student body. I am proud to support him in his campaign for ASG president!',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/JulesCantor.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Taylor',
                lastName: 'Billings',
                position: 'Co-Chair, NCDC & Former Co-Chair, FUP',
                text: 'ASG accomplishes great things each year, and I want to see all of our amazing students who aren\'t a part of ASG play an active role in those achievements. NU students are extremely involved, and their expertise is invaluable. I\'m supporting Noah and Christina because I believe they not only want to tackle important issues on campus, but also have the ability to do so in a new and integrated way that actively involves knowledgeable students across campus.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/TaylorBillings.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Huebner',
                position: 'President, NU Photography Club',
                text: 'I’m voting for Noah and Christina because I know they’ll bring the transparency and accountability that ASG needs. I’ve worked with Noah as a fellow Peer Adviser and have seen his amazing ability to listen and put the needs of others before his, which is exactly what he’ll do as ASG president. I’m confident that Noah and Christina\'s focus on important issues including mental health and sustainability will enact the change that Northwestern needs. ',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/BryanHuebner.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Natalie Grace',
                lastName: 'Stern',
                position: 'President, ZOOZ',
                text: 'As president of ZOOZ, Hillel\'s community service and social justice student group, and as a psychology major, I am a firm advocate of active listening and implementing necessary change. I have faith that Noah and Christina will effectively lead the Northwestern Community by listening to the most important needs of the students--including diversity & inclusion, mental health, sexual assault policies, and more--which is why I want Noah and Christina to represent Northwestern.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/NatalieGraceStern.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Raymond',
                lastName: 'Dai',
                position: 'President, Kemper Hall',
                text: 'As Kemper President I have seen what is necessary for good leadership. I have learned the importance of actively listening to my peers before acting and I think Noah has demonstrated these skills inside and outside of ASG. He is the candidate who has the best feel for the pulse of the student body. I truly believe Noah and Christina will change the culture of ASG to better reflect the needs of students. Therefore I am excited to fully endorse their candidacy. ',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/RaymondDai.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Jocie',
                lastName: 'Padgen',
                position: 'Former VP of Programming, PHA',
                text: 'As an organization that touches all corners of campus and impacts every Northwestern student, ASG needs leaders who are enthusiastic about not only being receptive to, but rather actively seeking out the varied perspectives, priorities, and concerns of our student body. Noah and Christina’s “Listen then Lead” approach has the potential to prevent ASG from becoming siloed in its initiatives and to create an Associated Student Government that is truly representative of its constituents. I’m excited to endorse Noah and Christina because I believe in their commitment to serving Northwestern and truly empowering its students.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/JociePadgen.jpg'
            },
        
            {
                className: 'endorsement',
                firstName: 'James',
                lastName: 'Hu',
                position: 'Co-President, UNITY Charity Fashion Show & Treasurer, Spoon Magazine',
                text: 'I would like to endorse Noah and Christina because I cannot think of a more experienced and qualified pair of candidates. It has been a pleasure for me to serve on an executive board with Noah this past year and observe his focused and thorough leadership style, a work ethic he demonstrates without compromising his uniquely passionate and humorous personality. Noah fully dedicates himself to large and small issues alike and I have no doubt that as ASG President, he will execute his goals and visions in the manner most beneficial to the student body.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/JamesHu.jpg'
            },
        ];

  });
