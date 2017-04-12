/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, $translate) {

      $scope.transparent = baConfig.theme.blur;
      var dashboardColors = baConfig.colors.dashboard;
      $scope.doughnutData = {
          labels: [
              $translate.instant('dashboard.traffic.other'),
              $translate.instant('dashboard.traffic.search_engines'),
              $translate.instant('dashboard.traffic.referral_traffic'),
              $translate.instant('dashboard.traffic.direct_traffic'),
              $translate.instant('dashboard.traffic.ad_campaigns')
          ],
          datasets: [
              {
                  data: [2000, 1500, 1000, 1200, 400],
                  backgroundColor: [
                      dashboardColors.white,
                      dashboardColors.blueStone,
                      dashboardColors.surfieGreen,
                      dashboardColors.silverTree,
                      dashboardColors.gossip
                  ],
                  hoverBackgroundColor: [
                      colorHelper.shade(dashboardColors.white, 15),
                      colorHelper.shade(dashboardColors.blueStone, 15),
                      colorHelper.shade(dashboardColors.surfieGreen, 15),
                      colorHelper.shade(dashboardColors.silverTree, 15),
                      colorHelper.shade(dashboardColors.gossip, 15)
                  ],
                  percentage: [87, 22, 70, 38, 17]
              }]
      };

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx, {
          type: 'doughnut',
          data: $scope.doughnutData,
          options: {
              cutoutPercentage: 64,
              responsive: true,
              elements: {
                  arc: {
                      borderWidth: 0
                  }
              }
          }
      });
  }
})();
