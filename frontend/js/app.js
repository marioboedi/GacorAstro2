const app = angular.module('mainApp', []);


app.controller('authController', function ($scope, UserService) {
    $scope.login = function () {
        UserService.login($scope.loginData).then(
            (response) => {
                alert('Login berhasil!');
                location.reload();
            },
            (error) => {
                alert('Login gagal: ' + error.data.message);
            }
        );
    };

    $scope.logout = function () {
        UserService.logout().then(() => {
            alert('Logout berhasil!');
            location.reload();
        });
    };
});
