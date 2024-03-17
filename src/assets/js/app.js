const modules = ['ui.router', 'ui.bootstrap', 'ui.utils.masks'];
const apiBaseUrl = window.__env.baseUrl;
const evenPicServices = angular.module('evenPicApp', modules);

evenPicServices.config(function($stateProvider, $urlRouterProvider) {
    $.fn.datepicker.dates['pt'] = {
        days: ['Domingo', 'Segunda', 'Terça', 'Quarte', 'Quinta', 'Sexta', 'Sábado'],
        daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        daysMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        clear: 'Limpar',
        format: 'dd/mm/yyyy'
    };

    const customParseFormat = window.dayjs_plugin_customParseFormat;
    
    dayjs.extend(customParseFormat);

    const otherwiseFlow = () => {
        if (!localStorage.getItem('current_page')) {
			return '/home';
        }

        return `/${localStorage.getItem('current_page')}`;
    };

    $stateProvider.state('home', {
		url: '/home',
		views: {
			'': {
				templateUrl: 'src/views/home.html',
				controller: 'HomeCtrl'
			}
		},
	});

    $urlRouterProvider.otherwise(otherwiseFlow);
	$urlRouterProvider.when('/', otherwiseFlow);
});

evenPicServices.config(function($httpProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});
