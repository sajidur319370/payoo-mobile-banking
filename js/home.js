import { logout, requireAuth } from "./auth.js";
import { $ } from "./utils.js";

requireAuth(); // logged-out users are sent back to the login page

$("#logout").addEventListener("click", logout);
