<template>
  <div>
    <div class="container spinner">
      <div class="constant">
        <div class="heightHandle">
          <div class="circle-main">
            <div class="electrons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="circle-inner">
              <div class="circle-travel">
                <div class="crosshair"></div>
                <div class="crosshair"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <h3 class="construction-notice">Under construction</h3>
    <p>
      Interested in lending a hand? 
      <br>
      Curious what we're up to?
      <br>
      See our current open issues on <a href="https://gitlab.com/eideldev/spinozapp/milestones?state=opened" target="_blank">GitLab</a>.
      <br>
      <br>
      Questions or comments?
      <br>
      Let us know at <a href="mailto:aron@eideldev.com">aron@eideldev.com</a>
      </p>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.container {
  width: 50%;
  height: 400px;
  max-width: 400px;
  margin: 100px auto 100px;
  background: none;
}
@media (max-width: 770px) {
  .container {
    width: 40vw;
    height: 40vw;
  }
}
.constant {
  position: relative;
  width: 100%;
}
.constant .heightHandle {
  position: absolute;
  display: block;
  width: 100%;
  padding-top: 100%;
}
.circle-main,
.circle-main:before,
.circle-main:after,
.circle-inner:before,
.circle-inner,
.circle-travel,
.circle-travel:before,
.circle-travel:after {
  box-shadow: inset 0 0 0 1px rgba(49, 61, 62, 0.5), inset 0 0 10px 2px rgba(49, 61, 62, 0.25);
}
.electrons span {
  box-shadow: 0 0 0 1px rgba(150, 174, 255, 0.2);
  background: rgba(150, 174, 255, 0.1);
}
.crosshair {
  background: rgba(49, 61, 62, 0.3);
}
.circle-main {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.circle-main:before,
.circle-main:after {
  content: "";
  position: absolute;
  border-radius: 4px;
}
.circle-main:before {
  width: 100%;
  height: 4px;
  top: 50%;
  right: 0;
  margin-top: -2px;
  background: -webkit-linear-gradient(left, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.1) 50%, rgba(49, 61, 62, 0.3));
}
.circle-main:after {
  width: 4px;
  height: 100%;
  left: 50%;
  margin-left: -2px;
  background: -webkit-linear-gradient(top, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.1) 50%, rgba(49, 61, 62, 0.3));
}
.circle-inner {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  animation: spin 6s linear infinite;
  background: -webkit-radial-gradient(center, ellipse cover, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.3) 10%, transparent 10%, transparent 100%);
}
.circle-inner:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  top: 25%;
  left: 50%;
}
.circle-travel {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 0;
  left: -50%;
  animation: spin 3s linear infinite reverse;
  background: -webkit-radial-gradient(center, ellipse cover, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.3) 7%, transparent 7%, transparent 100%);
}
.circle-travel:before,
.circle-travel:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  border-radius: 50%;
  background: -webkit-radial-gradient(center, ellipse cover, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.3) 35%, transparent 35%, transparent 100%);
}
.circle-travel:before {
  left: -5px;
}
.circle-travel:after {
  right: -5px;
}
.crosshair {
  position: absolute;
  background-clip: content-box !important;
  border-radius: 1px;
}
.crosshair:nth-child(1) {
  width: 200%;
  height: 2px;
  margin-top: -1px;
  top: 50%;
  left: -50%;
  border-left: solid 8px transparent;
  border-right: solid 8px transparent;
  background: -webkit-linear-gradient(left, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.1) 50%, rgba(49, 61, 62, 0.3));
}
.crosshair:nth-child(1):before,
.crosshair:nth-child(1):after {
  top: -2px;
  border-top: solid 3px transparent;
  border-bottom: solid 3px transparent;
}
.crosshair:nth-child(1):before {
  left: -8px;
  border-right: solid 6px rgba(49, 61, 62, 0.3);
}
.crosshair:nth-child(1):after {
  right: -8px;
  border-left: solid 6px rgba(49, 61, 62, 0.3);
}
.crosshair:nth-child(2) {
  height: 200%;
  width: 2px;
  margin-left: -1px;
  top: -50%;
  left: 50%;
  border-top: solid 8px transparent;
  border-bottom: solid 8px transparent;
  background: -webkit-linear-gradient(top, rgba(49, 61, 62, 0.3) 0%, rgba(49, 61, 62, 0.1) 50%, rgba(49, 61, 62, 0.3));
}
.crosshair:nth-child(2):before,
.crosshair:nth-child(2):after {
  left: -2px;
  border-left: solid 3px transparent;
  border-right: solid 3px transparent;
}
.crosshair:nth-child(2):before {
  top: -8px;
  border-bottom: solid 6px rgba(49, 61, 62, 0.3);
}
.crosshair:nth-child(2):after {
  bottom: -8px;
  border-top: solid 6px rgba(49, 61, 62, 0.3);
}
.crosshair:before,
.crosshair:after {
  content: "";
  position: absolute;
}
.electrons {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: none !important;
  box-shadow: none !important;
}
.electrons span {
  position: absolute;
  width: 150%;
  height: 50%;
  left: -25%;
  top: 25%;
  border-radius: 50%;
}
.electrons span:nth-child(2) {
  transform: rotate(45deg);
}
.electrons span:nth-child(3) {
  transform: rotate(90deg);
}
.electrons span:nth-child(4) {
  transform: rotate(-45deg);
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>