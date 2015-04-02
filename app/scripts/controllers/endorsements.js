'use strict';


angular.module('campaignWebsiteApp')
	.controller('EndorsementsCtrl', function ($rootScope, $scope, $route) {


        // Allows nav panel to highlight active tab
      	$rootScope.activeTab = $route.current.activeTab;
        $scope.panelVisible = false;


        // Set up Masonry
      	var $container = $('main.endorsements ul.js-masonry');
        $(window).resize(function() {
            $container.imagesLoaded(function() {
                var squareSide = ($container.width() - (3 * 5)) / 4;
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
            console.log($scope.panelVisible);
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
                firstName: 'Joji',
                lastName: 'Syed',
                position: 'President, SCNO',
                text: 'To me, a student leader is not someone who has dedicated their entire career at Northwestern to a particular student group or activity. A student leader is a well rounded individual--it is an individual who has devoted time to their academics, their extracurricular activities, their career, and their friends. A student leader is an individual who is able to find the optimal balance of being an active and engaged student. Noah Star and Christina Kim, two of my close friends and mentors, have done just that. They are real students--they care about their extracurriculars all while appreciating and experiencing many different aspects of the Northwestern experience. We need more leaders like this. As president of SCNO, often times I see young members struggling to find the optimal balance as they have a very narrow and skewed perception of leadership. By embracing well rounded leaders, we will redefine what it means to be a leader on this campus, and therefore, lay the foundation for a better (and happier) Northwestern. ',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JojiSyed.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Erik',
                lastName: 'Baker',
                position: 'MARS Programming Chair & WNUR Director',
                text: 'I\'m supporting Noah and Christina because I trust them to advocate for students, challenge administrators, and produce real change in ASG from the bottom up. As an outsider to ASG, my experience of NU student government has primarily been one of frustration and disappointment. Noah and Christina\'s vision has convinced me that they have what it takes to lead ASG away from business as usual and empower students.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ErikBaker.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Maroua',
                lastName: 'Sallami',
                position: 'Co-Director, NUCHR & President, MAL',
                text: 'I support Christina and Noah because they genuinely want to make a difference in students’ experiences. At such an interesting time on campus where a lot of critical conversations are taking place, they both recognize ASG’s limits and have a plan to amplify the opinions of students’ experts rather than have ASG lead these conversations. I am confident they are a great choice for ASG and I am looking forward to all the fantastic things that they will do representing Northwestern.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MarouaSallami.jpg'
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
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'Co-President, Points for a Purpose',
                text: 'I am voting for Noah and Christina for ASG President and Vice-President because I am confident that they will bring voice back to the student body. I trust that their plans will help allow ASG to meet the needs of students in a way that is representative of student opinions. Noah and Christina are actually interested in hearing what we have to say and developing concrete plans in response to them. I am particularly drawn to their emphasis on the need for increased accessibility to mental health resources, assistance for student groups, and financial support for low-income students. I trust that Noah and Christina will serve as excellent advocates for student needs and that their passion and leadership abilities will contribute to the betterment of the NU community.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/BryanDean.jpg'
            },

            {
                className: 'endorsement',
                firstName: 'Michael',
                lastName: 'Graf',
                position: 'Co-Chair, Northwestern Community Building Initiative & Civic Engagement Fellow',
                text: 'I believe Noah and Christina are best equipped to lead ASG because they have an inclusive and encompassing definition of Northwestern community. I find their platform most persuasive when they describe their commitment to student accessibility - connecting student groups to one another and serving as a pillar of support, rather than the ultimate arbiter of projects at Northwestern. We deserve Noah and Christina because we need leaders who are passionate about serving every student and forging partnerships across our campus.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MichaelGraf.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Emily',
                lastName: 'Mannheimer',
                position: 'Former Vice President, Standards for PHA',
                text: 'In my role as Vice President of Standards for the Panhellenic Association last year, I was the liaison between the Panhellenic community and ASG, and Noah was who I worked with on the other end. He was innovative when I was adapting the role that sorority members play in ASG, and helped me to write changes to our own Panhellenic bylaws. I am certain that Noah and Christina have the skills to to listen to the needs of the entire Northwestern community and respond to those needs in new and effective ways. I am proud to call them my friends and wholeheartedly endorse their campaign.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/endorsements/EmilyMannheimer.jpg'
            },


            {
                className: 'highlight',
                text: '"I am certain that Noah and Christina have the skills to to listen to the needs of the entire Northwestern community and respond to those needs in new and effective ways."',
                name: 'Emily Mannheimer'
            },

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
                firstName: 'Neil',
                lastName: 'Dalvie',
                position: 'Former President, Delta Tau Delta',
                text: 'I have known Noah and Christina as leaders for a long time. Noah and I served a year as the vice president and president of our fraternity, and I learned a lot about Noah\'s passions, goals, and leadership style. I don\'t care as much about what exactly they will do within ASG, but I do know that Noah and Christina care deeply about listening to students. It\'s that simple, and that should matter to everybody. I strongly support Noah and Christina for ASG, a couple of normal students just tryna chill.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NeilDalvie.jpg'
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
                firstName: 'Vicky',
                lastName: 'Ho',
                position: 'President, Undergraduate Premedical Society',
                text: 'I am so excited to endorse Noah and Christina as President and VP of ASG! Both Noah and Christina are incredibly passionate about and dedicated to getting student voices heard. They have the experience to understand how our student government functions in a way that best serves its students. I have watched both of them be personally involved in working on issues that affect people of all different backgrounds and work to increase the accessibility and inclusivity on our campus, something that I am very passionate about.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/VickyHo.jpg'
            },


            {
                className: 'endorsement',
                firstName: 'Melody',
                lastName: 'Song',
                position: 'Co-Director, NUCHR',
                text: 'Noah and Christina have impressed me with the way that they have actively engaged with communities outside of their own. They are incredibly passionate about making ASG more representative of all student interests, especially of underrepresented students and communities. Above all, Noah and Christina have shown that they are ready and willing to fight for the changes that need to be made. I have no doubt that together, they can leave a strong impact on Northwestern.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MelodySong.jpg'
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
                firstName: 'Matthew',
                lastName: 'Clarkston',
                position: 'Off-Campus Whip, ASG Senate',
                text: 'I believe in Christina and Noah as the next leaders of ASG because I think that they are the most authentic, qualified, experienced, and communicative leaders. Other tickets might talk about empowering student voices but Christina and Noah are the only candidates with a track record on listening to students and using it to focus their work in student government.',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MatthewClarkston.jpg'
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
            // {
            //     className: 'endorsement',
            //     firstName: 'Ronak',
            //     lastName: 'Patel',
            //     position: '',
            //     text: '',
            //     image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RonakPatel.jpg'
            // },
            
            // {
            //     className: 'endorsement',
            //     firstName: 'Archit',
            //     lastName: 'Baskaran',
            //     position: '',
            //     text: '',
            //     image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArchitBaskaran.jpg'
            // },
            // {
            //     className: 'endorsement',
            //     firstName: 'Noah',
            //     lastName: 'Whinston',
            //     position: '',
            //     text: '',
            //     image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NoahWhinston.jpg'
            // },


            // {
            //     className: 'highlight',
            //     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.'
            // },


            // {
            //     className: 'endorsement',
            //     firstName: 'Bryan',
            //     lastName: 'Berger',
            //     position: 'President, Points for a Purpose',
            //     image: 'https://unsplash.it/500/500?image=200'
            // },
            // {
            //     className: 'endorsement',
            //     firstName: 'Chris',
            //     lastName: 'Howard',
            //     position: 'Vice President, ODB',
            //     image: 'https://unsplash.it/500/500?image=201'
            // },
            // {
            //     className: 'endorsement',
            //     firstName: 'Christina',
            //     lastName: 'Kim',
            //     position: 'Vice President, ASG',
            //     image: 'https://unsplash.it/500/500?image=202'
            // },
            // {
            //     className: 'endorsement',
            //     firstName: 'Noah',
            //     lastName: 'Star',
            //     position: 'President, ASG',
            //     image: 'https://unsplash.it/500/500?image=203'
            // },
        ];

  });
