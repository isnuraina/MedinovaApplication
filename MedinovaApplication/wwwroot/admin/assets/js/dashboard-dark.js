(function($) {
  'use strict';
  $(function() {
    if ($("#cash-sales-chart").length) {
      const ctx = document.getElementById('cash-sales-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              label: 'Support',
              data: [25, 90, 50, 80, 40, 40, 0],
              borderColor: [
                '#2090ff'
              ],
              borderWidth: 2,
              fill: false,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                stepSize: 200,
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }
    if ($("#cash-sales-chart-b").length) {
      const ctx = document.getElementById('cash-sales-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              label: 'Support',
              data: [85, 20, 60, 30, 70, 70, 90],
              borderColor: [
                '#2090ff'
              ],
              borderWidth: 2,
              fill: false,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                stepSize: 200,
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }
    if ($("#monthly-income-chart").length) {
      const ctx = document.getElementById('monthly-income-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
          datasets: [
            {
              label: 'Support',
              data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 62, 60, 30, 60, 68, 75, 70, 90],
              borderColor: [
                '#ffc100'
              ],
              borderWidth: 2,
              fill: false,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }
    if ($("#monthly-income-chart-b").length) {
      const ctx = document.getElementById('monthly-income-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
          datasets: [
            {
              label: 'Support',
              data: [90, 70, 75, 68, 60, 30, 60, 62, 60, 40, 65, 68, 68, 63, 65, 60, 85, 70, 90, 83, 85],
              borderColor: [
                '#ffc100'
              ],
              borderWidth: 2,
              fill: false,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }
    if ($("#yearly-sales-chart").length) {
      const ctx = document.getElementById('yearly-sales-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              label: 'Support',
            data: [0, 40, 40, 80, 40, 85, 35],
            borderColor: [
              '#ff4747'
            ],
            borderWidth: 2,
            fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }
    if ($("#yearly-sales-chart-b").length) {
      const ctx = document.getElementById('yearly-sales-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              label: 'Support',
              data: [35, 85, 40, 80, 40, 40, 0],
              borderColor: [
                '#ff4747'
              ],
            borderWidth: 2,
            fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }
    if ($("#daily-deposits-chart").length) {
      const ctx = document.getElementById('daily-deposits-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
          datasets: [
            {
              label: 'Support',
              data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 62, 60, 30, 60, 68, 75, 70, 90],
              borderColor: [
                '#71c016'
              ],
              borderWidth: 2,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }

    if ($("#daily-deposits-chart-b").length) {
      const ctx = document.getElementById('daily-deposits-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
          datasets: [
            {
              label: 'Support',
              data: [90, 70, 75, 68, 60, 30, 60, 62, 60, 40, 65, 68, 68, 63, 65, 60, 85, 70, 90, 83, 85],
              borderColor: [
                '#71c016'
              ],
              borderWidth: 2,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .4,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                display:false,
                color: "#6C7383",
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display:false,
              },
              ticks: {
                color: "#6C7383",
                display:false,
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
      });

    }

    if ($("#cash-deposits-chart").length) {
      const ctx = document.getElementById('cash-deposits-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
          datasets: [
            {
              label: 'Returns',
              data: [27, 35, 30, 40, 52, 48, 54, 46, 70],
              borderColor: [
                '#ff4747'
              ],
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: "#fff"
            },
            {
              label: 'Sales',
              data: [29, 40, 37, 48, 64, 58, 70, 57, 80],
              borderColor: [
                '#4d83ff'
              ],
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: "#fff"
            },
            {
              label: 'Loss',
              data: [90, 62, 80, 63, 72, 62, 40, 50, 38],
              borderColor: [
                '#ffc100'
              ],
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: "#fff"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: true,
                drawTicks: true,
                color:"#313452",
              },
              ticks: {
                display:true,
                color:"#b1b1b5",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:true,
                color:"#313452",
              },
              ticks: {
                display:true,
                color:"#b1b1b5",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
              const chartId = chart.canvas.id;
              var i;
              const legendId = `${chartId}-legend`;
              const ul = document.createElement('ul');
              for(i=0;i<chart.data.datasets.length; i++) {
                  ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].borderColor}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
              }
              return document.getElementById(legendId).appendChild(ul);
            }
        }]
      });

    }

    if ($("#total-sales-chart").length) {
      const ctx = document.getElementById('total-sales-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(47,91,191,0.77)"
            },
            {
              label: '2018',
              data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(77,131,255,0.77)"
            },
            {
              label: 'Past years',
              data: [98, 88, 92, 90, 98, 98, 90, 92, 78, 88, 84, 76, 80, 72, 74, 74, 88, 80, 72, 62, 62, 72, 72, 78, 78, 72, 75, 78, 68, 68, 60, 68, 70, 75, 70, 80, 82, 78, 78, 84, 82 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(77,131,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
              const chartId = chart.canvas.id;
              var i;
              const legendId = `${chartId}-legend`;
              const ul = document.createElement('ul');
              for(i=0;i<chart.data.datasets.length; i++) {
                  ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].backgroundColor}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
              }
              return document.getElementById(legendId).appendChild(ul);
            }
        }]
      });

    }

    $('#recent-purchases-listing').DataTable({
      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      },
      searching: false, paging: false, info: false
    });

    if ($("#downloads-chart-a").length) {
      const ctx = document.getElementById('downloads-chart-a');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.77)"
            },
            {
              label: '2018',
              data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 58, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        }
      });

    }

    if ($("#downloads-chart-b").length) {
      const ctx = document.getElementById('downloads-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [52, 52, 40, 40, 28, 32, 26, 31, 32, 32, 32, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.77)"
            },
            {
              label: '2018',
              data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 64, 60, 55, 49, 44, 42, 43, 42, 38, 43, 41, 43, 40, 38 ,38, 38, 32, 32 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        }
      });

    }

    if ($("#feedbacks-chart-a").length) {
      const ctx = document.getElementById('feedbacks-chart-a');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.77)"
            },
            {
              label: '2018',
              data: [68, 58, 62, 66, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 46, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        }
      });

    }

    if ($("#feedbacks-chart-b").length) {
      const ctx = document.getElementById('feedbacks-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [22, 22, 10, 10, 8, 12, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 20, 15, 19, 24 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.77)"
            },
            {
              label: '2018',
              data: [68, 58, 62, 66, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 46, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        }
      });

    }

    if ($("#customers-chart-a").length) {
      const ctx = document.getElementById('customers-chart-a');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.77)"
            },
            {
              label: '2018',
              data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        }
      });

    }

    if ($("#customers-chart-b").length) {
      const ctx = document.getElementById('customers-chart-b');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
          datasets: [
            {
              label: '2019',
              data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.77)"
            },
            {
              label: '2018',
              data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
              borderColor: [
                'transparent'
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(255,255,255,0.43)"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:false,
                color:"#e9e9e9",
              },
              ticks: {
                display:false,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          },
          layout: {
            padding: {
                bottom: -20,
                left: -20
            }
          }
        }
      });

    }

  });
})(jQuery);