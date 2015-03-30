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
        var $container = $('ul.js-masonry');
        $container.imagesLoaded(function() {
            $container.masonry({
                columnWidth: 260,
                itemSelector: '.block',
                gutter: 0,
                isAnimated: true,
            });
        });


        // Endorsement list
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
        		firstName: 'Andrew',
        		lastName: 'Green',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AndrewGreen.jpg'
        	},
            {
                firstName: 'Archit',
                lastName: 'Baskaran',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArchitBaskaran.jpg'
            },
            {
                firstName: 'Ariel',
                lastName: 'Roitman',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArielRoitman.jpg'
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
                firstName: 'Emily',
        		lastName: 'Shanker',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EmilyShanker.jpg'
            },
            {
        		firstName: 'Eric',
        		lastName: 'Oringer',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EricOringer.jpg'
        	},
        	{
        		firstName: 'Erik',
        		lastName: 'Baker',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ErikBaker.jpg'
        	},
        	{
        		firstName: 'Iwani',
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
        	{
        		firstName: 'Joji',
        		lastName: 'Syed',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JojiSyed.jpg'
        	},
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
                firstName: 'Josh',
        		lastName: 'O\'Neil',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JoshONeil.jpg'
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
                firstName: 'Leo',
                lastName: 'Zhu',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LeoZhu.jpg'
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
                firstName: 'Maroua',
                lastName: 'Sallami',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MarouaSallami.jpg'
            },
            {
                firstName: 'Mary',
                lastName: 'Felder',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MaryFelder.jpg'
            },
            {
                firstName: 'Matthew',
                lastName: 'Clarkston',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MatthewClarkston.jpg'
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
                firstName: 'Melody',
                lastName: 'Song',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MelodySong.jpg'
            },
            {
                firstName: 'Michael',
                lastName: 'Graf',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MichaelGraf.jpg'
            },
            {
                firstName: 'Neil',
                lastName: 'Dalvie',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NeilDalvie.jpg'
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
                firstName: 'Noah',
                lastName: 'Whinston',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NoahWhinston.jpg'
            },
            {
                firstName: 'Philip',
                lastName: 'Lan',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/PhilipLan.jpg'
            },
            {
                firstName: 'Ronak',
                lastName: 'Patel',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RonakPatel.jpg'
            },
            {
                firstName: 'Ross',
                lastName: 'Krasner',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RossKrasner.jpg'
            },
            {
                firstName: 'Vicky',
                lastName: 'Ho',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/VickyHo.jpg'
            },
        ];
  	});
