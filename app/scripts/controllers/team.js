'use strict';


angular.module('campaignWebsiteApp')
 	.controller('TeamCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];


        // Show active page in nav panel
    	$rootScope.activeTab = $route.current.activeTab;


        // Set up Masonry
        var $container = $('main.team ul.js-masonry');
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
                $('li.member').height(squareSide);
                $container.masonry({
                    columnWidth: squareSide,
                    itemSelector: '.block',
                    gutter: 5,
                    isAnimated: true,
                });
            });
        }).resize();


        // team list
        $scope.blocks = [
        	{
        		firstName: 'AJ',
        		lastName: 'Vielma',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AJVielma.jpg'
        	},
        	{
        		firstName: 'Alex',
        		lastName: 'Cohen',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AlexCohen.jpg'
        	},
            {
                firstName: 'Ben',
                lastName: 'Zimmerman',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/BenZimmerman.jpg'
            },
            {
                firstName: 'Conor',
        		lastName: 'Hanon',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ConorHanon.jpg'
            },
            {
                firstName: 'Elayna',
        		lastName: 'Shanker',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ElaynaShanker.jpg'
            },
            {
        		firstName: 'Eric',
        		lastName: 'Oringer',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EricOringer2.jpg'
        	},
        	{
        		firstName: 'Imani',
        		lastName: 'Wilson',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/IwaniWilson.jpg'
        	},
            {
                firstName: 'Jacob',
        		lastName: 'Swan',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JacobSwan.jpg'
            },
            {
                firstName: 'Jake',
        		lastName: 'Kruk',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JakeKruk.jpg'
            },
            {
                firstName: 'Jared',
        		lastName: 'Schifrien',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JaredSchifrien.jpg'
            },
            {
        		firstName: 'Jennifer',
        		lastName: 'Li',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JenniferLi.jpg'
        	},
        	{
        		firstName: 'Jenny',
        		lastName: 'Hendrix',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JennyHendrix.jpg'
        	},
        	// {
        	// 	firstName: 'Joji',
        	// 	lastName: 'Syed',
        	// 	image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JojiSyed.jpg'
        	// },
            {
                firstName: 'Jon',
        		lastName: 'Rovira',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JonRovira.jpg'
            },
            {
                firstName: 'Jonny',
        		lastName: 'McBride',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JonathanMcBride.jpg'
            },
            {
                firstName: 'Joris',
                lastName: 'Cyizere',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JorisCyizere.jpg'
            },
            {
                firstName: 'Julian',
                lastName: 'Gerez',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JulianGerez.jpg'
            },
            {
                firstName: 'Katherine',
                lastName: 'Ericson',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/KatherineEricson.jpg'
            },
            {
                firstName: 'Kevin',
                lastName: 'Corkran',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/KevinCorkran.jpg'
            },
            {
                firstName: 'Leona',
                lastName: 'Maliakal',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LeonaMaliakal.jpg'
            },
            {
                firstName: 'Lisa',
                lastName: 'Grewe',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LisaGrewe.jpg'
            },
            {
                firstName: 'Liz',
                lastName: 'Deadrick',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LizDeadrick.jpg'
            },
            {
                firstName: 'Maya',
                lastName: 'Hurley-Wales',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MayaHurley-Wales.jpg'
            },
            {
                firstName: 'Mayank',
                lastName: 'Parikh',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MayankParikh.jpg'
            },
            {
                firstName: 'McKenzie',
                lastName: 'Maxson',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/McKenzieMaxson.jpg'
            },
            {
                firstName: 'Megan',
                lastName: 'McDowell',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MeganMcDowell.jpg'
            },
            {
                firstName: 'Nevil',
                lastName: 'George',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NevilGeorge.jpg'
            },
            {
                firstName: 'Nicholas',
                lastName: 'McCombe',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NicholasMcCombe.jpg'
            },
            {
                firstName: 'Philip',
                lastName: 'Lan',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/PhilipLan.jpg'
            }
        ];


        // Styling
  	});
