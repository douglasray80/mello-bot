window.onload = function() {

  var paper = Snap('#canvas');

  var border = paper.rect(0, 0, 1110, 750).attr({ fill: 'none', stroke: '#000000', strokeWidth: 0.3 });

  // var gridX = paper.path(
  //   'M 10 0 V 550 M 20 0 V 550 M 30 0 V 550 M 40 0 V 550 M 50 0 V 550 M 60 0 V 550 M 70 0 V 550 M 80 0 V 550 M 90 0 V 550' +
  //   'M 100 0 V 550 M 110 0 V 550 M 120 0 V 550 M 130 0 V 550 M 140 0 V 550 M 150 0 V 550 M 160 0 V 550 M 170 0 V 550 M 180 0 V 550 M 190 0 V 550' +
  //   'M 200 0 V 550 M 210 0 V 550 M 220 0 V 550 M 230 0 V 550 M 240 0 V 550 M 250 0 V 550 M 260 0 V 550 M 270 0 V 550 M 280 0 V 550 M 290 0 V 550' +
  //   'M 300 0 V 550 M 310 0 V 550 M 320 0 V 550 M 330 0 V 550 M 340 0 V 550 M 350 0 V 550 M 360 0 V 550 M 370 0 V 550 M 380 0 V 550 M 390 0 V 550' +
  //   'M 400 0 V 550 M 410 0 V 550 M 420 0 V 550 M 430 0 V 550 M 440 0 V 550 M 450 0 V 550 M 460 0 V 550 M 470 0 V 550 M 480 0 V 550 M 490 0 V 550' +
  //   'M 500 0 V 550 M 510 0 V 550 M 520 0 V 550 M 530 0 V 550 M 540 0 V 550 M 550 0 V 550 M 560 0 V 550 M 570 0 V 550 M 580 0 V 550 M 590 0 V 550' +
  //   'M 600 0 V 550 M 610 0 V 550 M 620 0 V 550 M 630 0 V 550 M 640 0 V 550 M 650 0 V 550 M 660 0 V 550 M 670 0 V 550 M 680 0 V 550 M 690 0 V 550' +
  //   'M 700 0 V 550 M 710 0 V 550 M 720 0 V 550 M 730 0 V 550 M 740 0 V 550 M 750 0 V 550 M 760 0 V 550 M 770 0 V 550 M 780 0 V 550 M 790 0 V 550' +
  //   'M 800 0 V 550 M 810 0 V 550 M 820 0 V 550 M 830 0 V 550 M 840 0 V 550 M 850 0 V 550 M 860 0 V 550 M 870 0 V 550 M 880 0 V 550 M 890 0 V 550' +
  //   'M 900 0 V 550 M 910 0 V 550 M 920 0 V 550 M 930 0 V 550 M 940 0 V 550 M 950 0 V 550 M 960 0 V 550 M 970 0 V 550 M 980 0 V 550 M 990 0 V 550' +
  //   'M 0 0 Z').attr({ stroke: '#000000', strokeWidth: 0.2 });
  //
  // var gridY = paper.path(
  //   'M 0 10 H 1000 M 0 20 H 1000 M 0 30 H 1000 M 0 40 H 1000 M 0 50 H 1000 M 0 60 H 1000 M 0 70 H 1000 M 0 80 H 1000 M 0 90 H 1000' +
  //   'M 0 100 H 1000 M 0 110 H 1000 M 0 120 H 1000 M 0 130 H 1000 M 0 140 H 1000 M 0 150 H 1000 M 0 160 H 1000 M 0 170 H 1000 M 0 180 H 1000 M 0 190 H 1000' +
  //   'M 0 200 H 1000 M 0 210 H 1000 M 0 220 H 1000 M 0 230 H 1000 M 0 240 H 1000 M 0 250 H 1000 M 0 260 H 1000 M 0 270 H 1000 M 0 280 H 1000 M 0 290 H 1000' +
  //   'M 0 300 H 1000 M 0 310 H 1000 M 0 320 H 1000 M 0 330 H 1000 M 0 340 H 1000 M 0 350 H 1000 M 0 360 H 1000 M 0 370 H 1000 M 0 380 H 1000 M 0 390 H 1000' +
  //   'M 0 400 H 1000 M 0 410 H 1000 M 0 420 H 1000 M 0 430 H 1000 M 0 440 H 1000 M 0 450 H 1000 M 0 460 H 1000 M 0 470 H 1000 M 0 480 H 1000 M 0 490 H 1000' +
  //   'M 0 500 H 1000 M 0 510 H 1000 M 0 520 H 1000 M 0 530 H 1000 M 0 540 H 1000 M 0 550 H 1000' +
  //   'M 0 0 Z').attr({ stroke: '#000000', strokeWidth: 0.2 });
  //
  //
  //   paper.text(50, 5, "50");
  //   paper.text(100, 5, "100");
  //   paper.text(150, 5, "150");
  //   paper.text(200, 5, "200");
  //   paper.text(250, 5, "250");
  //   paper.text(300, 5, "300");
  //   paper.text(350, 5, "350");
  //   paper.text(400, 5, "400");
  //   paper.text(450, 5, "450");
  //   paper.text(500, 5, "500");
  //   paper.text(550, 5, "550");
  //   paper.text(600, 5, "600");
  //   paper.text(650, 5, "650");
  //   paper.text(700, 5, "700");
  //   paper.text(750, 5, "750");
  //   paper.text(800, 5, "800");
  //   paper.text(850, 5, "850");
  //   paper.text(900, 5, "900");
  //   paper.text(950, 5, "950");
  //
  //   paper.text(50, 560, "50");
  //   paper.text(100, 560, "100");
  //   paper.text(150, 560, "150");
  //   paper.text(200, 560, "200");
  //   paper.text(250, 560, "250");
  //   paper.text(300, 560, "300");
  //   paper.text(350, 560, "350");
  //   paper.text(400, 560, "400");
  //   paper.text(450, 560, "450");
  //   paper.text(500, 560, "500");
  //   paper.text(550, 560, "550");
  //   paper.text(600, 560, "600");
  //   paper.text(650, 560, "650");
  //   paper.text(700, 560, "700");
  //   paper.text(750, 560, "750");
  //   paper.text(800, 560, "800");
  //   paper.text(850, 560, "850");
  //   paper.text(900, 560, "900");
  //   paper.text(950, 560, "950");
  //
  //   paper.text(10, 50, "50");
  //   paper.text(10, 100, "100");
  //   paper.text(10, 150, "150");
  //   paper.text(10, 200, "200");
  //   paper.text(10, 250, "250");
  //   paper.text(10, 300, "300");
  //   paper.text(10, 350, "350");
  //   paper.text(10, 400, "400");
  //   paper.text(10, 450, "450");
  //   paper.text(10, 500, "500");
  //
  //   paper.text(1010, 50, "50");
  //   paper.text(1010, 100, "100");
  //   paper.text(1010, 150, "150");
  //   paper.text(1010, 200, "200");
  //   paper.text(1010, 250, "250");
  //   paper.text(1010, 300, "300");
  //   paper.text(1010, 350, "350");
  //   paper.text(1010, 400, "400");
  //   paper.text(1010, 450, "450");
  //   paper.text(1010, 500, "500");


  $(function() {
    $(".dial").knob({
      'fgColor': '#3ff538',
      'inputColor': "#000000",
      'bgColor': "#d3d3d3",
      'angleOffset': -125,
      'angleArc': 360,
      'thickness': .4,
      'width': 100
    });
  });

  // CONSOLE
  paper.path('M 165 19, L 45 232, L 68 232, L 180 19, L 165 19, Z').attr({ fill: '#d7d7d7', stroke: '#000', strokeWidth: 0.1 });
  paper.path('M 913 20, L 1039 230, L 1062 230, L 930 20, L 913 20, Z').attr({ fill: '#d7d7d7', stroke: '#000', strokeWidth: 0.1 });

  paper.path('M 180 19, L 183 130, L 75 320, L 68 232, Z').attr({ fill: '#d7d7d7', stroke: '#000', strokeWidth: 0.1 });
  paper.path('M 913 20, L 905 130, L 1028 320, L 1039 230, Z').attr({ fill: '#d7d7d7', stroke: '#000', strokeWidth: 0.1 });

  // CONTROL PANEL
  // Block Left
  paper.path('M 84 290, L 34 391, L 273 390, L 296 290, L 84 290, M 273 390, L 276 410, L 41 410, L 34 391, Z').attr({ fill: '#d3d3d3', 'fill-opacity': 1, stroke: '#000', strokeWidth: 0.1 });
  // Switch-Knob Panel
  paper.path('M 84 292, L 37 388, L 270 386, L 292 292, L 85 292, Z').attr({ fill: '#dbe4eb', 'fill-opacity': 1, stroke: '#fff', strokeWidth: 0.3 });
  // Block
  paper.path('M 297.5 290, L 274.5 390, L 355 390, L 371.5 290, L 297.5 290, M 274.5 390, L 277.5 410, L 357.5 412, L 355 390, M 371.5 290, L 378 295, L 357.5 412, L 355 390, Z').attr({ fill: '#d3d3d3', stroke: '#000', strokeWidth: 0.1 });
  // Block Right
  paper.path('M 938 288, L 982.5 387, L 1073 386, L 1023 288, L 938 288, M 1073 386, L 1064 407, L 978 407, L 982.5 387, Z').attr({ fill: '#d3d3d3', stroke: '#000', strokeWidth: 0.1 });


  // COVER TOP
  paper.path('M 180 22, L 70 232, L 1037 230, L 913 24, L 180 22, Z').attr({ fill: '#d7d7d7', stroke: '#000', strokeWidth: 0.1 });
  // COVER FRONT
  paper.path('M 70 232, L 1037 230, L 1024 290, L 79 291, L 70 232, Z').attr({ fill: '#d7d7d7', stroke: '#000', strokeWidth: 0.1 });


  // KEYS
  var g0 = paper.path('M 374 291, L 357 392, L 384 392, L 389 350, L 382 350, L 389 291, L 374 291, M 357 392, L 359 410, L 386 410, L 384 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var gSharp0 = paper.path('M 390 291, L 383 349, L 398 349, L 405 291, L 390 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var a0 = paper.path('M 406 291, L 398.5 350, L 390 350, L 385 392, L 414 392, L 418 350, L 414 350, L 420 291, L 406 291, M 385 392, L 387 410, L 416 410, L 414 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var aSharp0 = paper.path('M 421 291, L 415 349, L 431 349, L 436 291, L 421 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var b0 = paper.path('M 437 291, L 431.5 350, L 419 350, L 415 392, L 444 392, L 451 291, L 437 291, M 415 392, L 417 410, L 445 410, L 444 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var c1 = paper.path('M 452 291, L 445 392, L 474.5 392, L 475.5 349, L 465 349, L 468 291, L 452 291, M 445 392, L 446 410, L 475.5 410, L 474.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var cSharp1 = paper.path('M 469 291, L 466 348, L 483 348, L 485 291, L 469 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var d1 = paper.path('M 486 291, L 484 349, L 477 349, L 476 392, L 506 392, L 506 349, L 500 349, L 501 291, L 485 291, M 476 392, L 477 410, L 506.8 410, L 506 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var dSharp1 = paper.path('M 502 291, L 501 348, L 518 348, L 518 291, L 502 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var e1 = paper.path('M 519 291, L 519 349, L 507.5 349, L 507.5 392, L 535 392, L 534 291, L 519 291, M 507.5 392, L 508 410, L 535.5 410, L 535 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var f1 = paper.path('M 535 291, L 536 392, L 564.5 392, L 563.5 349, L 551 349, L 549 291, L 535 291, M 536 392, L 536.5 410, L 565 410, L 564.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var fSharp1 = paper.path('M 550 291, L 552 348, L 567 348, L 565 291, L 550 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });

  var g1 = paper.path('M 566 291, L 568 349, L 564.5 349, L 566 392, L 595.5 392, L 593.5 349, L 583 349, L 580 291, L 566 291, M 566 392, L 566 410, L 596 410, L 595.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var gSharp1 = paper.path('M 581 291, L 584 348, L 600 348, L 596 291, L 581 291, Z').attr({ fill: "#000", stroke: '#000', strokeWidth: 0.2 });
  var a1 = paper.path('M 597 291, L 601 349, L 595 349, L 597 392, L 625.5 392, L 621.5 349, L 617 349, L 611 291, L 597 291, M 597 392, L 597 410, L 625.7 410, L 625.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var aSharp1 = paper.path('M 612 291, L 618 348, L 634 348, L 627 291, L 612 291, Z').attr({ fill: "#000", stroke: '#000', strokeWidth: 0.2 });
  var b1 = paper.path('M 628 291, L 635 349, L 623 349, L 627 392, L 656 392, L 643 291, L 630 291, M 627 392, L 627 410, L 655.7 410, L 656 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var c2 = paper.path('M 644 291, L 657 392, L 686 392, L 680 349, L 669 349, L 660 291, L 644 291, M 657 392, L 656.5 410, L 685 410, L 686 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var cSharp2 = paper.path('M 661 291, L 670 348, L 685 348, L 676 291, L 661 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var d2 = paper.path('M 677 291, L 686 349, L 681 349, L 687 392, L 716 392, L 709 349, L 704 349, L 692 291, L 677 291, M 687 392, L 686 410, L 714.6 410, L 716 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var dSharp2 = paper.path('M 693 291, L 704.5 348, L 720 348, L 709 291, L 693 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var e2 = paper.path('M 710 291, L 721 349, L 710 349, L 717 392, L 746.5 392, 724.5 291, L 710 291, M 717 392, L 715.5 410, L 745 410, L 746.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var f2 = paper.path('M 725.5 291, L 747.5 392, L 777 392, L 767 349, 754 349, L 740 291, L 725.5 291, M 747.5 392, L 746 410, L 775 410, L 777 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var fSharp2 = paper.path('M 741 291, L 755 348, L 770 348, L 767.5 330, L 756 291, L 741 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });

  var g2 = paper.path('M 757 291, L 768.5 330, L 771 349, L 768 349, L 778 392, L 806.5 392, L 795 348, L 787 348, L 770 291, L 757 291, M 778 392, L 776 410, L 804 410, L 806.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var gSharp2 = paper.path('M 771 291, L 788 347, L 803 347, L 799 330, L 787 291, L 771 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var a2 = paper.path('M 788 291, L 800 330, L 804 348, L 796 348, L 808 392, L 836.5 392, L 824 347, L 819 347, L 801 291, L 788 291, M 808 392, L 805.5 410, 834 410, L 836.5 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var aSharp2 = paper.path('M 802 291, L 820 346, L 835 346, L 833.5 328, L 819 291, L 802 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var b2 = paper.path('M 820 291, L 834.5 328, L 836 347, L 825 347, L 838 392, L 866 392, L 833 291, L 821 291, M 838 392, L 835.5 410, L 863 410, L 866 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var c3 = paper.path('M 834 291, L 867 392, L 894 392, L 880 348, L 869 348, L 848 291, 834 291, M 867 392, L 864 410, L 891 410, L 894 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var cSharp3 = paper.path('M 849 291, L 869.5 347, L 884 347, L 882 330, L 866 291, L 849 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var d3 = paper.path('M 867 291, L 883 330, L 885 348, L 881 348, L 895 392, L 924 392, L 909 348.5, L 902 348.5, L 880 291, L 867 291, M 895 392, L 892 410, L 920.6 410, L 924 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var dSharp3 = paper.path('M 881 291, L 903 347.5, L 918.5 347.5, L 914 330, L 897 291, L 881 291, Z').attr({ fill: '#000', stroke: '#000', strokeWidth: 0.2 });
  var e3 = paper.path('M 898 291, L 915 330, L 920 348.5, L 910 348.5, L 925 392, L 953 392, L 912 291, L 898 291, M 925 392, L 921.6 410, L 949.5 410, L 953 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });
  var f3 = paper.path('M 913 291, L 954 392, L 982 392, L 937 291, L 913 291, M 954 392, L 950.5 410, L 978 410, L 982 392, Z').attr({ fill: '#fff', stroke: '#000', strokeWidth: 0.2 });

  paper.path('M 41 410, L 33 426, L 1076 421, L 1067 407, L 41 410, Z').attr({ fill: '#d3d3d3', 'fill-opacity': 1, stroke: '#000', strokeWidth: 0.2 });



  var voiceSelect = function(voiceSelected) {
    var voiceButtons = ['#cello-btn', '#choir-btn', '#flute-btn', '#gc3brass-btn', '#m300a-btn', '#m300b-btn',
      '#mkIIbrass-btn', '#strings-btn', '#violin-btn', '#woodwind-btn'];

    for (var i = 0; i < voiceButtons.length; i++) {
      if(voiceButtons[i] === voiceSelected) {
        $(voiceButtons[i]).addClass('selected');
      } else {
        $(voiceButtons[i]).removeClass('selected');
      }
    }

    console.log("voiceSelect: " + voiceSelected);
  };

  $('#cello-btn').click(function() { voiceSelect('#cello-btn'); });
  $('#choir-btn').click(function() { voiceSelect('#choir-btn'); });
  $('#flute-btn').click(function() { voiceSelect('#flute-btn'); });
  $('#gc3brass-btn').click(function() { voiceSelect('#gc3brass-btn'); });
  $('#m300a-btn').click(function() { voiceSelect('#m300a-btn'); });
  $('#m300b-btn').click(function() { voiceSelect('#m300b-btn'); });
  $('#mkIIbrass-btn').click(function() { voiceSelect('#mkIIbrass-btn'); });
  $('#strings-btn').click(function() { voiceSelect('#strings-btn'); });
  $('#violin-btn').click(function() { voiceSelect('#violin-btn'); });
  $('#woodwind-btn').click(function() { voiceSelect('#woodwind-btn'); });



  var keyNames = {
    1: {
      boxName: g0,
      cello: new Howl({ urls:['assets/sound/cello/01.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/01.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/01.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/01.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/01.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/01.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/01.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/01.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/01.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/01.ogg']})
    },
    2: {
      boxName: gSharp0,
      cello: new Howl({ urls:['assets/sound/cello/02.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/02.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/02.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/02.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/02.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/02.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/02.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/02.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/02.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/02.ogg']})
    },
    3: {
      boxName: a0,
      cello: new Howl({ urls:['assets/sound/cello/03.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/03.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/03.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/03.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/03.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/03.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/03.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/03.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/03.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/03.ogg']})
    },
    4: {
      boxName: aSharp0,
      cello: new Howl({ urls:['assets/sound/cello/04.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/04.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/04.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/04.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/04.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/04.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/04.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/04.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/04.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/04.ogg']})
    },
    5: {
      boxName: b0,
      cello: new Howl({ urls:['assets/sound/cello/05.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/05.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/05.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/05.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/05.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/05.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/05.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/05.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/05.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/05.ogg']})
    },
    6: {
      boxName: c1,
      cello: new Howl({ urls:['assets/sound/cello/06.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/06.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/06.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/06.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/06.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/06.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/06.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/06.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/06.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/06.ogg']})
    },
    7: {
      boxName: cSharp1,
      cello: new Howl({ urls:['assets/sound/cello/07.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/07.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/07.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/07.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/07.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/07.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/07.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/07.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/07.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/07.ogg']})
    },
    8: {
      boxName: d1,
      cello: new Howl({ urls:['assets/sound/cello/08.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/08.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/08.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/08.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/08.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/08.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/08.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/08.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/08.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/08.ogg']})
    },
    9: {
      boxName: dSharp1,
      cello: new Howl({ urls:['assets/sound/cello/09.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/09.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/09.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/09.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/09.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/09.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/09.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/09.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/09.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/09.ogg']})
    },
    10: {
      boxName: e1,
      cello: new Howl({ urls:['assets/sound/cello/10.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/10.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/10.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/10.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/10.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/10.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/10.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/10.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/10.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/10.ogg']})
    },
    11: {
      boxName: f1,
      cello: new Howl({ urls:['assets/sound/cello/11.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/11.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/11.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/11.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/11.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/11.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/11.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/11.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/11.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/11.ogg']})
    },
    12: {
      boxName: fSharp1,
      cello: new Howl({ urls:['assets/sound/cello/12.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/12.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/12.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/12.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/12.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/12.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/12.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/12.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/12.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/12.ogg']})
    },
    13: {
      boxName: g1,
      cello: new Howl({ urls:['assets/sound/cello/13.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/13.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/13.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/13.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/13.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/13.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/13.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/13.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/13.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/13.ogg']})
    },
    14: {
      boxName: gSharp1,
      cello: new Howl({ urls:['assets/sound/cello/14.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/14.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/14.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/14.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/14.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/14.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/14.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/14.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/14.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/14.ogg']})
    },
    15: {
      boxName: a1,
      cello: new Howl({ urls:['assets/sound/cello/15.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/15.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/15.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/15.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/15.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/15.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/15.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/15.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/15.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/15.ogg']})
    },
    16: {
      boxName: aSharp1,
      cello: new Howl({ urls:['assets/sound/cello/16.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/16.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/16.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/16.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/16.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/16.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/16.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/16.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/16.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/16.ogg']})
    },
    17: {
      boxName: b1,
      cello: new Howl({ urls:['assets/sound/cello/17.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/17.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/17.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/17.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/17.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/17.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/17.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/17.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/17.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/17.ogg']})
    },
    18: {
      boxName: c2,
      cello: new Howl({ urls:['assets/sound/cello/18.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/18.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/18.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/18.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/18.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/18.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/18.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/18.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/18.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/18.ogg']})
    },
    19: {
      boxName: cSharp2,
      cello: new Howl({ urls:['assets/sound/cello/19.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/19.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/19.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/19.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/19.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/19.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/19.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/19.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/19.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/19.ogg']})
    },
    20: {
      boxName: d2,
      cello: new Howl({ urls:['assets/sound/cello/20.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/20.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/20.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/20.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/20.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/20.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/20.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/20.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/20.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/20.ogg']})
    },
    21: {
      boxName: dSharp2,
      cello: new Howl({ urls:['assets/sound/cello/21.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/21.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/21.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/21.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/21.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/21.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/21.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/21.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/21.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/21.ogg']})
    },
    22: {
      boxName: e2,
      cello: new Howl({ urls:['assets/sound/cello/22.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/22.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/22.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/22.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/22.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/22.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/22.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/22.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/22.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/22.ogg']})
    },
    23: {
      boxName: f2,
      cello: new Howl({ urls:['assets/sound/cello/23.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/23.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/23.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/23.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/23.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/23.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/23.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/23.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/23.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/23.ogg']})
    },
    24: {
      boxName: fSharp2,
      cello: new Howl({ urls:['assets/sound/cello/24.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/24.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/24.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/24.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/24.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/24.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/24.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/24.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/24.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/24.ogg']})
    },
    25: {
      boxName: g2,
      cello: new Howl({ urls:['assets/sound/cello/25.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/25.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/25.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/25.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/25.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/25.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/25.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/25.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/25.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/25.ogg']})
    },
    26: {
      boxName: gSharp2,
      cello: new Howl({ urls:['assets/sound/cello/26.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/26.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/26.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/26.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/26.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/26.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/26.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/26.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/26.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/26.ogg']})
    },
    27: {
      boxName: a2,
      cello: new Howl({ urls:['assets/sound/cello/27.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/27.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/27.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/27.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/27.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/27.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/27.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/27.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/27.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/27.ogg']})
    },
    28: {
      boxName: aSharp2,
      cello: new Howl({ urls:['assets/sound/cello/28.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/28.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/28.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/28.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/28.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/28.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/28.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/28.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/28.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/28.ogg']})
    },
    29: {
      boxName: b2,
      cello: new Howl({ urls:['assets/sound/cello/29.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/29.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/29.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/29.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/29.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/29.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/29.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/29.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/29.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/29.ogg']})
    },
    30: {
      boxName: c3,
      cello: new Howl({ urls:['assets/sound/cello/30.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/30.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/30.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/30.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/30.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/30.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/30.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/30.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/30.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/30.ogg']})
    },
    31: {
      boxName: cSharp3,
      cello: new Howl({ urls:['assets/sound/cello/31.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/31.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/31.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/31.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/31.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/31.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/31.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/31.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/31.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/31.ogg']})
    },
    32: {
      boxName: d3,
      cello: new Howl({ urls:['assets/sound/cello/32.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/32.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/32.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/32.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/32.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/32.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/32.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/32.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/32.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/32.ogg']})
    },
    33: {
      boxName: dSharp3,
      cello: new Howl({ urls:['assets/sound/cello/33.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/33.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/33.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/33.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/33.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/33.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/33.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/33.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/33.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/33.ogg']})
    },
    34: {
      boxName: e3,
      cello: new Howl({ urls:['assets/sound/cello/34.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/34.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/34.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/34.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/34.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/34.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/34.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/34.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/34.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/34.ogg']})
    },
    35: {
      boxName: f3,
      cello: new Howl({ urls:['assets/sound/cello/35.ogg']}),
      choir: new Howl({ urls:['assets/sound/choir/35.ogg']}),
      flute: new Howl({ urls:['assets/sound/flute/35.ogg']}),
      gc3brass: new Howl({ urls:['assets/sound/gc3brass/35.ogg']}),
      m300a: new Howl({ urls:['assets/sound/m300a/35.ogg']}),
      m300b: new Howl({ urls:['assets/sound/m300b/35.ogg']}),
      mkIIbrass: new Howl({ urls:['assets/sound/mkIIbrass/35.ogg']}),
      strings: new Howl({ urls:['assets/sound/strings/35.ogg']}),
      violin: new Howl({ urls:['assets/sound/violin/35.ogg']}),
      woodwind: new Howl({ urls:['assets/sound/woodwind/35.ogg']})
    }
  };



  for(let i in keyNames) {

    keyNames[i].boxName.click(function(){

      // Add click event
      if ($('#cello-btn').hasClass('selected')) {
        console.log("Click works");
        keyNames[i].cello.play();
      } else if ($('#choir-btn').hasClass('selected')) {
        keyNames[i].choir.play();
      } else if ($('#flute-btn').hasClass('selected')) {
        keyNames[i].flute.play();
      } else if ($('#gc3brass-btn').hasClass('selected')) {
        keyNames[i].gc3brass.play();
      } else if ($('#m300a-btn').hasClass('selected')) {
        keyNames[i].m300a.play();
      } else if ($('#m300b-btn').hasClass('selected')) {
        keyNames[i].m300b.play();
      } else if ($('#mkIIbrass-btn').hasClass('selected')) {
        keyNames[i].mkIIbrass.play();
      } else if ($('#strings-btn').hasClass('selected')) {
        keyNames[i].strings.play();
      } else if ($('#violin-btn').hasClass('selected')) {
        keyNames[i].violin.play();
      } else if ($('#woodwind-btn').hasClass('selected')) {
        keyNames[i].woodwind.play();
      }
    });
  }


};
