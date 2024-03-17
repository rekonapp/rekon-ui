evenPicServices.directive('eddySideNav', function(
    Utils,
    $state,
    $timeout,
    $rootScope,
    ModalUtils,
    AlertMessage,
    GlobalService
) {
	return {
        replace: true,
		templateUrl: 'src/views/eddy-side-nav.html',
		link: function(scope) {
            const getActiveMenuName = name => name.split('.')[1];

			scope.menuActive = getActiveMenuName($state.current.name);

            $timeout(() => {
                $rootScope.globalUserInfo.short_name = Utils.getShortName($rootScope.globalUserInfo.name);
            })

            const openChangeWalletModal = () => {
                const modalInstance = ModalUtils.open({
                    centered: true,
                    template: 'change-wallet-modal.html',
                    controller: 'ChangeWalletModalCtrl'
                });

                modalInstance.result.then(newWallet => {
                    $rootScope.globalUserInfo.wallet = newWallet;

                    const alertData = {
                        title: 'Sucesso!',
                        subtitle: 'Carteira alterada com sucesso.',
                        status: 'success'
                    };
        
                    AlertMessage.open(alertData);
                })
            };

            $rootScope.$on('$stateChangeSuccess', (event, toState) => {
				scope.menuActive = getActiveMenuName(toState.name);
			});

            scope.logout = GlobalService.logout;
            scope.openChangeWalletModal = openChangeWalletModal;
		}
	};
});
