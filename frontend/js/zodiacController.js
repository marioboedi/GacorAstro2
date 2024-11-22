app.controller('zodiacController', ['$scope', '$http', function ($scope, $http) {
    // Placeholder untuk data zodiak
    $scope.zodiacs = [];
    $scope.userZodiac = null;

    // Array bulan
    $scope.months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Fungsi untuk mengambil data zodiak dari API
    $http.get('http://localhost:5000/api/zodiacs')
        .then(function (response) {
            console.log('Data zodiak berhasil dimuat:', response.data); // Debugging
            $scope.zodiacs = response.data; // Masukkan data ke dalam scope
        })
        .catch(function (error) {
            console.error('Error fetching zodiac data:', error); // Debugging
        });

    // Fungsi untuk mencari zodiak berdasarkan tanggal lahir
    $scope.findZodiac = function () {
        if (!$scope.birthDay || !$scope.birthMonth) {
            alert('Please enter your birth day and month!');
            return;
        }
    
        // Tanggal lahir pengguna dalam format objek
        const birthDate = { day: $scope.birthDay, month: $scope.birthMonth };
    
        console.log(`Checking for Birth Date: ${birthDate.day}/${birthDate.month}`);
    
        // Cari zodiak yang cocok
        $scope.userZodiac = $scope.zodiacs.find(zodiac => {
            const startDate = zodiac.startDate; // Format: { day: <integer>, month: <integer> }
            const endDate = zodiac.endDate;   // Format: { day: <integer>, month: <integer> }
    
            console.log(`Checking Zodiac: ${zodiac.name}`);
            console.log(`Start Date: ${startDate.day}/${startDate.month}`);
            console.log(`End Date: ${endDate.day}/${endDate.month}`);
    
            if (startDate.month <= endDate.month) {
                // Rentang biasa dalam satu tahun
                return (
                    (birthDate.month === startDate.month && birthDate.day >= startDate.day) || // Dalam bulan awal
                    (birthDate.month === endDate.month && birthDate.day <= endDate.day) || // Dalam bulan akhir
                    (birthDate.month > startDate.month && birthDate.month < endDate.month) // Bulan di antara
                );
            } else {
                // Rentang melintasi tahun baru (misalnya Capricorn)
                return (
                    (birthDate.month === startDate.month && birthDate.day >= startDate.day) || // Dalam bulan awal
                    (birthDate.month === endDate.month && birthDate.day <= endDate.day) || // Dalam bulan akhir
                    (birthDate.month > startDate.month || birthDate.month < endDate.month) // Bulan di antara (Desember -> Januari)
                );
            }
        });
    
        // Hasil
        if (!$scope.userZodiac) {
            console.log('No zodiac found for the given date.');
            alert('No zodiac found for the given date.');
        } else {
            console.log('Zodiac found:', $scope.userZodiac.name);
        }
    };
    
            
}]);
