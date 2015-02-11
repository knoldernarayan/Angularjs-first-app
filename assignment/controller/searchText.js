/**
 * @ngdoc User Dashboard
 * @name dashboardApp
 * @description This module handle data in data-table structure, it provide
 *              searching, sorting by column and limit record etc.
 */
var myapp = angular.module("myapp", [])
myapp.controller('DashboardController', [
		'$scope',
		"$filter",
		function($scope,$filter) {
			$scope.dashboard = [ {
				"name" : "Mullen",
				"company" : "GLUKGLUK",
				"email" : "mullenjones@glukgluk.com",
				"phone" : "+1 (999) 547-3885",
				"date" : "Fri Apr 08 2011 10:05:51 GMT+0530 (IST)"
			}, {
				"name" : "Shanna",
				"company" : "PANZENT",
				"email" : "shannajones@panzent.com",
				"phone" : "+1 (921) 478-2286",
				"date" : "Thu Mar 25 1982 23:14:04 GMT+0530 (IST)"
			}, {
				"name" : "Laverne",
				"company" : "ZAPPIX",
				"email" : "lavernejones@zappix.com",
				"phone" : "+1 (950) 442-3505",
				"date" : "Tue Oct 15 1985 08:24:28 GMT+0530 (IST)"
			}, {
				"name" : "Sadie",
				"company" : "DUFLEX",
				"email" : "sadiejones@duflex.com",
				"phone" : "+1 (879) 400-3199",
				"date" : "Sat Oct 14 2000 02:23:58 GMT+0530 (IST)"
			}, {
				"name" : "Taylor",
				"company" : "FLEXIGEN",
				"email" : "taylorjones@flexigen.com",
				"phone" : "+1 (821) 527-3882",
				"date" : "Sun Sep 25 2011 00:58:49 GMT+0530 (IST)"
			}, {
				"name" : "Burch",
				"company" : "ISOSURE",
				"email" : "burchjones@isosure.com",
				"phone" : "+1 (855) 499-2987",
				"date" : "Sun Feb 20 1994 14:24:02 GMT+0530 (IST)"
			},{
				    "name": "Rodgers",
				    "company": "HYDROCOM",
				    "email": "rodgersjones@hydrocom.com",
				    "phone": "+1 (870) 454-3304",
				    "date": "Tue Jul 20 1982 20:48:02 GMT+0530 (IST)"
				  },
				  {
				    "name": "Emily",
				    "company": "QUANTASIS",
				    "email": "emilyjones@quantasis.com",
				    "phone": "+1 (927) 595-3000",
				    "date": "Fri May 17 2002 05:27:45 GMT+0530 (IST)"
				  },
				  {
				    "name": "Ross",
				    "company": "ZOARERE",
				    "email": "rossjones@zoarere.com",
				    "phone": "+1 (948) 585-3914",
				    "date": "Mon Jul 25 1983 07:36:46 GMT+0530 (IST)"
				  },
				  {
				    "name": "Jenna",
				    "company": "TELPOD",
				    "email": "jennajones@telpod.com",
				    "phone": "+1 (907) 453-2699",
				    "date": "Sun Oct 19 1975 22:56:49 GMT+0530 (IST)"
				  },
				  {
				    "name": "Fowler",
				    "company": "LIQUICOM",
				    "email": "fowlerjones@liquicom.com",
				    "phone": "+1 (915) 577-3330",
				    "date": "Thu Nov 14 1996 19:43:13 GMT+0530 (IST)"
				  },
				  {
				    "name": "Jackie",
				    "company": "TALENDULA",
				    "email": "jackiejones@talendula.com",
				    "phone": "+1 (861) 523-2023",
				    "date": "Sun Dec 26 1993 09:41:48 GMT+0530 (IST)"
				  },
				  {
				    "name": "Carmella",
				    "company": "REMOTION",
				    "email": "carmellajones@remotion.com",
				    "phone": "+1 (863) 567-2515",
				    "date": "Fri Jan 17 1992 03:53:59 GMT+0530 (IST)"
				  },
				  {
				    "name": "Kayla",
				    "company": "AUTOMON",
				    "email": "kaylajones@automon.com",
				    "phone": "+1 (928) 461-2723",
				    "date": "Wed Sep 18 1991 15:20:13 GMT+0530 (IST)"
				  },
				  {
				    "name": "Lori",
				    "company": "EZENTIA",
				    "email": "lorijones@ezentia.com",
				    "phone": "+1 (841) 511-2724",
				    "date": "Sat Nov 23 2002 21:10:54 GMT+0530 (IST)"
				  },
				  {
				    "name": "Christian",
				    "company": "ANIVET",
				    "email": "christianjones@anivet.com",
				    "phone": "+1 (929) 585-2732",
				    "date": "Mon Mar 07 1977 22:05:39 GMT+0530 (IST)"
				  },
				  {
				    "name": "Arlene",
				    "company": "EXOPLODE",
				    "email": "arlenejones@exoplode.com",
				    "phone": "+1 (956) 446-2636",
				    "date": "Fri Sep 22 2000 18:54:49 GMT+0530 (IST)"
				  },
				  {
				    "name": "Hicks",
				    "company": "COMVERGES",
				    "email": "hicksjones@comverges.com",
				    "phone": "+1 (847) 432-2311",
				    "date": "Sat Feb 11 1978 08:25:40 GMT+0530 (IST)"
				  },
				  {
				    "name": "Vance",
				    "company": "BYTREX",
				    "email": "vancejones@bytrex.com",
				    "phone": "+1 (805) 453-2122",
				    "date": "Mon May 12 1986 07:27:17 GMT+0530 (IST)"
				  },
				  {
				    "name": "Janet",
				    "company": "ELITA",
				    "email": "janetjones@elita.com",
				    "phone": "+1 (877) 534-3588",
				    "date": "Mon Sep 05 2005 19:52:01 GMT+0530 (IST)"
				  },
				  {
				    "name": "Alejandra",
				    "company": "GINK",
				    "email": "alejandrajones@gink.com",
				    "phone": "+1 (950) 414-3238",
				    "date": "Tue Sep 06 2011 19:38:56 GMT+0530 (IST)"
				  },
				  {
				    "name": "Joyner",
				    "company": "EPLOSION",
				    "email": "joynerjones@eplosion.com",
				    "phone": "+1 (919) 470-3907",
				    "date": "Sat Jan 24 2009 23:58:25 GMT+0530 (IST)"
				  },
				  {
				    "name": "Dina",
				    "company": "ANDERSHUN",
				    "email": "dinajones@andershun.com",
				    "phone": "+1 (952) 518-2070",
				    "date": "Sat Aug 31 1974 15:00:07 GMT+0530 (IST)"
				  },
				  {
				    "name": "Jordan",
				    "company": "ASSURITY",
				    "email": "jordanjones@assurity.com",
				    "phone": "+1 (942) 576-2992",
				    "date": "Wed Oct 15 2008 07:05:49 GMT+0530 (IST)"
				  },
				  {
				    "name": "Scott",
				    "company": "DOGNOST",
				    "email": "scottjones@dognost.com",
				    "phone": "+1 (832) 417-3388",
				    "date": "Mon Jul 21 1975 03:09:13 GMT+0530 (IST)"
				  },
				  {
				    "name": "Josefa",
				    "company": "COSMETEX",
				    "email": "josefajones@cosmetex.com",
				    "phone": "+1 (949) 583-3390",
				    "date": "Tue Sep 07 1982 20:39:13 GMT+0530 (IST)"
				  }
			];
			// Initializing the reverse property = false;
			$scope.reverse =false
			// Initializing the defaultSearchField
			$scope.searchField =undefined;
			// Initializing the results with all datavalue by default
			$scope.results = $scope.dashboard;

			/*
			 * Method Sort filters the results by given field name as parameter.
			 */
			$scope.Sort = function(fieldName) {
				/*$scope.searchField = fieldName*/
				$scope.results = $filter('orderBy')($scope.dashboard,
						/*$scope.searchField*/fieldName, $scope.reverse)
				if ($scope.searchField === fieldName && $scope.reverse) {
					$scope.reverse = $scope.reverse;
				} else {
					$scope.reverse = !$scope.reverse;
				}
			}
			/*
			 * Method isSortUp returns true if the order of the sort is true
			 */
		/*	$scope.isSortUp = function() {
				return $scope.reverse
			}
			/*
			 * Method isSortUp returns true if the order of the sort is false
			 */
			/*$scope.isSortDown = function() {
				return !$scope.reverse
			}*/
		} ]);