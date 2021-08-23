import { DateCalc } from "./datecalc.js";
import { Tabs } from "./tabs.js";
import { Timer } from "./timer.js";
import { initTimer } from "./utils.js";
import "../css/style.css";
import { bundleMusic } from "../sounds/Usb-connection-sound-effect.mp3";
import { bundleImg } from "../img-test.png";

// Date calculator
new DateCalc("datecalc", "datecalc__result");

// Tabs
Tabs();

// Timer
const timer = new Timer("timer");
initTimer(timer);