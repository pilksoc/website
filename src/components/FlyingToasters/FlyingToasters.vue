<!--
  HTML/CSS licenced under the MIT licence
  https://github.com/bryanbraun/after-dark-css

  Toaster and toast in legal grey area
-->

<template>
  <div class="background">
    <!-- First group of objects -->
    <div class="toaster t1 p6"></div>
    <div class="toaster t3 p7"></div>
    <div class="toast tst1 p8"></div>
    <div class="toaster t3 p9"></div>
    <div class="toaster t1 p11"></div>
    <div class="toaster t3 p12"></div>
    <div class="toaster t2 p13"></div>
    <div class="toast tst3 p14"></div>
    <div class="toast tst2 p16"></div>
    <div class="toaster t1 p17"></div>
    <div class="toast tst2 p19"></div>
    <div class="toast tst3 p20"></div>
    <div class="toaster t2 p21"></div>
    <div class="toast tst1 p24"></div>
    <div class="toaster t1 p22"></div>
    <div class="toast tst2 p26"></div>
    <div class="toaster t1 p28"></div>
    <div class="toast tst2 p30"></div>
    <div class="toaster t2 p31"></div>
    <div class="toaster t1 p32"></div>
    <div class="toast tst3 p33"></div>

    <!-- wave 1 of (fast delayed) objects -->
    <div class="toaster t4 p27"></div>
    <div class="toaster t4 p10"></div>
    <div class="toaster t4 p25"></div>
    <div class="toaster t4 p29"></div>

    <!-- wave 2 of (delayed) objects -->
    <div class="toaster t5 p15"></div>
    <div class="toaster t5 p18"></div>
    <div class="toaster t5 p22"></div>

    <!-- wave 3 of (delayed) objects -->
    <div class="toaster t6 p6"></div>
    <div class="toaster t6 p11"></div>
    <div class="toaster t6 p15"></div>
    <div class="toaster t6 p19"></div>
    <div class="toaster t6 p23"></div>

    <!-- wave 5 of (delayed) objects -->
    <div class="toast tst4 p10"></div>
    <div class="toast tst4 p23"></div>
    <div class="toast tst4 p15"></div>
    <div class="toaster t7 p7"></div>
    <div class="toaster t7 p12"></div>
    <div class="toaster t7 p16"></div>
    <div class="toaster t7 p20"></div>
    <div class="toaster t7 p24"></div>

    <!-- wave 6 of (delayed) objects -->
    <div class="toaster t8 p8"></div>
    <div class="toaster t8 p13"></div>
    <div class="toaster t8 p17"></div>
    <div class="toaster t8 p25"></div>

    <!-- wave 7 of (delayed) objects -->
    <div class="toaster t9 p14"></div>
    <div class="toaster t9 p18"></div>
    <div class="toaster t9 p21"></div>
    <div class="toaster t9 p26"></div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.toaster {
  position: absolute;
  width: 64px;
  height: 64px;
  background-image: url("./toaster-sprite.gif");
}
.toast {
  position: absolute;
  width: 64px;
  height: 64px;
  background-image: url("./toast1.gif");
}

/**
 * Toaster Animations
 *
 * There are several kinds of toaster animations, marked as t1, t2, & t3.
 *
 * T1 is fastest speed
 * T2 is mid speed & flaps out of sequence with T1
 * T3 is the common speed
 * T4 is a delayed batch going at the fastest speed
 * T5, T6, T7, T8, & T9 are a delayed batch of toasters going at the common speed
 */
.t1 {
  animation: flap 0.2s steps(4) infinite alternate, fly 10s linear infinite;
}
.t2 {
  animation: flap 0.2s steps(4) infinite alternate-reverse,
    fly 16s linear infinite;
}
.t3 {
  animation: flap 0.2s steps(4) infinite alternate, fly 24s linear infinite;
}
.t4 {
  animation: flap 0.2s steps(4) infinite alternate, fly 10s 5s linear infinite;
}
.t5 {
  animation: flap 0.2s steps(4) infinite alternate-reverse,
    fly 24s 4s linear infinite;
}
.t6 {
  animation: flap 0.2s steps(4) infinite alternate, fly 24s 8s linear infinite;
}
.t7 {
  animation: flap 0.2s steps(4) infinite alternate-reverse,
    fly 24s 12s linear infinite;
}
.t8 {
  animation: flap 0.2s steps(4) infinite alternate, fly 24s 16s linear infinite;
}
.t9 {
  animation: flap 0.2s steps(4) infinite alternate-reverse,
    fly 24s 20s linear infinite;
}
/**
 * Toast Animations
 *
 * There are several kinds of toaster animations, marked as ts1, ts2, & ts3.
 *
 * Tst1 is fast
 * Tst2 is mid speed
 * Tst3 is the common speed
 * Tst4 is a delayed batch of toast going at the common speed
 */
.tst1 {
  animation: fly 10s linear infinite;
}
.tst2 {
  animation: fly 16s linear infinite;
}
.tst3 {
  animation: fly 24s linear infinite;
}
.tst4 {
  animation: fly 24s 12s linear infinite;
}

/**
 * Starting positions of objects (both toast & toasters).
 *  - There is a different position for each object to prevent overlapping.
 *  - We use percentages in order to accommodate for all window dimensions.
 *  - Use -6% as the smallest amount for remaining off-screen.
 *  - Organized into reverse "L" shaped batches to keep a constant flow.
 */
/* Batch 1 (-10% to -20%) */
/* Top edge, from right to left */
.p6 {
  right: -2%;
  top: -17%;
}
.p7 {
  right: 10%;
  top: -19%;
}
.p8 {
  right: 20%;
  top: -18%;
}
.p9 {
  right: 30%;
  top: -20%;
}
.p10 {
  right: 40%;
  top: -21%;
}
.p11 {
  right: 50%;
  top: -18%;
}
.p12 {
  right: 60%;
  top: -20%;
}
/* Right side, from top to bottom */
.p13 {
  right: -17%;
  top: 10%;
}
.p14 {
  right: -19%;
  top: 20%;
}
.p15 {
  right: -21%;
  top: 30%;
}
.p16 {
  right: -23%;
  top: 50%;
}
.p17 {
  right: -25%;
  top: 70%;
}

/* Batch 2 (-20% to -40%) */
/* Top edge, from right to left */
.p18 {
  right: 0%;
  top: -26%;
}
.p19 {
  right: 10%;
  top: -20%;
}
.p20 {
  right: 20%;
  top: -36%;
}
.p21 {
  right: 30%;
  top: -24%;
}
.p22 {
  right: 40%;
  top: -33%;
}
.p23 {
  right: 60%;
  top: -40%;
}
/* Right side, from top to bottom */
.p24 {
  right: -26%;
  top: 10%;
}
.p25 {
  right: -36%;
  top: 30%;
}
.p26 {
  right: -29%;
  top: 50%;
}

/* Batch 3 (-40% to -60%)*/
/* Top edge, from right to left */
.p27 {
  right: 0;
  top: -46%;
}
.p28 {
  right: 10%;
  top: -56%;
}
.p29 {
  right: 20%;
  top: -49%;
}
.p30 {
  right: 30%;
  top: -60%;
}
/* Right side, from top to bottom */
.p31 {
  right: -46%;
  top: 10%;
}
.p32 {
  right: -56%;
  top: 20%;
}
.p33 {
  right: -49%;
  top: 30%;
}

/* Flapping animation */
@keyframes flap {
  from {
    background-position: 0px;
  }
  to {
    background-position: -256px;
  }
}

/* Gliding animation using translate */
@keyframes fly {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-120vw, 120vh);
  }
}
</style>
