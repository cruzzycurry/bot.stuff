 //For info on documentation see: https://github.com/mdingena/att-client/tree/docs
//Other examples can be found at: https://github.com/mdingena/att-client/tree/main/examples



const { Client } = require('att-client'); //main att client 
const fs = require('fs');
const path = require('path');


const { myUserConfig } = require('C:\\Users\\reape\\Documents\\BotShit\\Config.js'); 
//const { myBotConfig } = require('./config'); 


//const bot = new Client(myBotConfig) //uncomment if using bot credentials

const bot = new Client(myUserConfig) 
const connections = [];
//--------------------------------------------------------------------------------

let server_id = 313523514; 



async function main() {
    await bot.start(); // Starts the bot
    bot.openServerConnection(server_id); // Opens server connection after bot start
  }



  bot.on('connect', connection => { // this event stream will call when the bot connects to the server
    console.log(`Console connection established to ${connection.server.name}.`);
    // Will log every time Client connect to a game server.
    connections.push(connection);//pushes the connection to the connections array to access outside of the event stream

    //! Example of subscribing to a server event stream

    connection.subscribe('PlayerJoined', (event) => {
      const PlayerJoined = event.data.user.username;
      console.log(`Player ${event.data.user.username} (${event.data.user.id}) joined the server.`); //logs when a player joins the server

      if(event.data.user.username == 'TheRavenSeb'){ //checks if the player that joined is the bot
       console.log('I has joined the server')
      }
      else if(event.data.user.username == 'Beepu'){ //checks if the player that joined is Beepu
        console.log('Beepu has joined the server')
      } else if (event.data.user.username == 'Lucid_Divine') {
        connection.send(`player message * "Lucid_Divine has joined the server" 5`)
      }


    });
  


// Thresholds and Constants
const SKYBOUND_JUMP_HEIGHT = 10; // Height in meters for the jump
const SKYBOUND_COOLDOWN = 12000; // 12 seconds in milliseconds
const SKYBOUND_PUSH_RADIUS = 5; // Radius in meters to push players away
const SKYBOUND_PUSH_DISTANCE = 3; // Distance to push players away
const GOD_MODE_DURATION = 15000; // 15 seconds in milliseconds
const FIREBALL_COOLDOWN = 5000; // 5 seconds in milliseconds
const MIN_XP_PER_KILL = 25; // Minimum XP awarded per kill
const MAX_XP_PER_KILL = 50; // Maximum XP awarded per kill
const BASE_XP_TO_LEVEL_UP = 250; // Base XP required for level 1 to 2
const XP_INCREASE_FACTOR = 1.6; // Factor by which XP needed increases each level
const HEAD_THRESHOLD = 0.3; // Right hand near face
const ABOVE_HEAD_THRESHOLD = 0.3; // Left hand above head
const NIGHTMARE_TOGETHER_THRESHOLD = 0.1; // Distance for detecting hands together
const NIGHTMARE_RADIUS = 5; // Radius in front of hands to check for players
const NIGHTMARE_EFFECT_DURATION = 10; // Duration of the nightmare effect in seconds
const NIGHTMARE_COOLDOWN_DURATION = 15000; // Cooldown duration (20 seconds)
const SHADOW_TELEPORT_COOLDOWN = 7000; // Cooldown duration in milliseconds
const FIREBALL_DAMAGE = 0.07; // Damage percentage (e.g., 0.3 means 30% health)
const FIREBALL_RANGE = 5; // Range in which the fireball can hit players in front of the caster
const BURN_DAMAGE = 0.05; // Burn damage per tick
const BURN_DURATION = 16000; // Total burn duration in milliseconds
const BURN_INTERVAL = 2000; // Burn tick interval in milliseconds
const BURN_CHANCE = 0.25; // 25% chance to apply burn effect
const COOLDOWN_TIME = 2000; // Cooldown time in milliseconds
// Damage for Wind Slash
const WIND_SLASH_PUSH_DISTANCE = 5; // Distance to push players away
const WIND_SLASH_RANGE = 6; // Range in front of the right hand for Wind Slash
 // Cooldown time in milliseconds
const FLAMETHROWER_DAMAGE_PER_TICK = 0.005; // Damage per tick for flamethrower
const FLAMETHROWER_TICK_INTERVAL = 500; // Interval in milliseconds between each damage tick
const FLAMETHROWER_TOTAL_DURATION = 4000; // Total flamethrower duration in milliseconds
const FLAMETHROWER_EFFECT_RANGE = 5; // Range in front of the right hand within which targets catch on fire
const FLAMETHROWER_BURN_CHANCE = 1.0; // 100% chance to apply burn effect in flamethrower
const FLAMETHROWER_COOLDOWN = 15000; // Cooldown time in milliseconds
const SLOW_FACE_THRESHOLD = 0.2; // Distance for detecting hand near someone else's face
const SLOW_EFFECT_DURATION = 10000; // Slow effect duration (5 seconds)
const SLOW_COOLDOWN_DURATION = 15000; // Cooldown duration (15 seconds) for "Slow" power
const PROXIMITY_RADIUS = 0.1; // Fixed radius for all magic class positions
const GENERAL_PROXIMITY_RADIUS = 2; // General area around the buttons
const HANDS_TOGETHER_THRESHOLD = 0.1; // Distance to check if hands are held together
const PEBBLE_DAMAGE = 0.05; // Damage dealt by Pebble
const PEBBLE_RANGE = 10; // Range within which the pebble can hit a target
const PEBBLE_COOLDOWN_DURATION = 10000; // Cooldown duration for Pebble in milliseconds
const REPEL_HANDS_TOGETHER_THRESHOLD = 0.1; // Distance to check if hands are together
const REPEL_HANDS_SEPARATED_THRESHOLD = 0.5; // Minimum distance for hands to be considered separated
const REPEL_RADIUS = 7; // Radius around caster for teleport effect
const REPEL_PUSH_DISTANCE = 10; // Distance to push players away from the caster
const REPEL_COOLDOWN_DURATION = 15000; // Cooldown duration (15 seconds)
const SHADOW_TELEPORT_DISTANCE = 2; // Distance behind the target to teleport
const AWAKEN_NIGHT_COOLDOWN = 60000; // 60 seconds in milliseconds
const ORBIT_RADIUS = 5; // Radius of the circle around the caster
const ORBIT_COOLDOWN = 20000; // 20 seconds in milliseconds
const RING_OF_FIRE_RADIUS = 5; // Radius around the caster in meters
const RING_OF_FIRE_DAMAGE = 0.1; // Damage per tick
const RING_OF_FIRE_DURATION = 10000; // Ring of Fire lasts 10 seconds
const DAMAGE_INTERVAL = 2000; // Damage applied every 2 seconds
const COOLDOWN_DURATION = 20000; // 20-second cooldown
const MUD_SHOT_DAMAGE = 0.05;
const MUD_SHOT_SPEED_REDUCTION = -5;
const MUD_SHOT_DURATION = 10; // 15 seconds for speed reduction
const MUD_SHOT_COOLDOWN = 10000; // 10 seconds cooldown for Mud Shot
const MUD_SHOT_RANGE = 5; // Range in front of the hand
const STONE_SKIN_PROTECTION_AMOUNT = 0.5; // Reduces damage by 50%
const STONE_SKIN_DURATION = 10000; // 10 seconds duration
const STONE_SKIN_COOLDOWN = 20000; // 20 seconds cooldown
const EARTHQUAKE_STOMP_DAMAGE = 0.2;
const EARTHQUAKE_STOMP_RADIUS = 6; // Range of shockwave
const EARTHQUAKE_STOMP_STUN_DURATION = 5000; // Stun for 5 seconds
const EARTHQUAKE_STOMP_COOLDOWN = 15000; // 15 seconds cooldown
const TELEPORT_DISTANCE_MIN = 3; // Minimum distance for teleport
const TELEPORT_DISTANCE_MAX = 7; // Maximum distance for teleport
const WIND_SLASH_DAMAGE = 0.125;
const WIND_SLASH_RADIUS = 6; // Radius for Wind Slash effect in meters
const WIND_SLASH_COOLDOWN = 5000; // 5 seconds cooldown
const PUSH_DISTANCE = 3; // Distance to push players away
const airClassPlayers = loadAirClassPlayers(); // Load Air class players






// Cooldown Trackers
const skyboundCooldowns = {};
const awakenNightCooldowns = {};
const activeCooldowns = {}; // Track cooldowns for each player
const nightmareCooldowns = {}; // Track cooldowns for each player using "Nightmare"
const playerCooldowns = {}; // Store cooldown status for each player
const activeWindSlash = {}; // Store cooldown and active state for Wind Slash
const activeFlamethrowers = {}; // Store active flamethrower state and cooldown for each player
const slowCooldowns = {}; // Track cooldowns for each player using "Slow"
const playerActivationState = {}; // Track the selected class and confirmation state for each player
const activePebbleUsers = {}; // Track users going through the Pebble activation steps
const pebbleCooldowns = {}; // Track cooldowns for each player using Pebble power
const repelCooldowns = {}; // Track cooldowns for each player using "Repel Pulse"
const shadowTeleportCooldowns = {};
const lastGestureState = {};
const fireballCooldowns = {};
const orbitCooldowns = {};
const mudShotCooldowns = {};
const stoneSkinCooldowns = {};
const earthquakeStompCooldowns = {};
const windSlashCooldowns = {}; // Cooldown tracker for Wind Slash

// File Paths
const EARTH_CLASS_PROGRESS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\earth_class_progress.json");
const FIRE_CLASS_PROGRESS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\fire_class_progress.json");
const AIR_CLASS_PROGRESS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\air_class_progress.json");
const SHADOW_CLASS_PROGRESS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\shadow_class_progress.json");
const FIRE_CLASS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class1.json"); // Path to fire class JSON file
const repelAIR_CLASS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class4.json"); // Path to air class JSON file for Wind Slash
const FIRE_CLASS_FILE_FLAMETHROWER = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class1.json"); // Path to fire class JSON file for flamethrower
const EARTH_CLASS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class3.json"); // Path to earth class JSON file for Pebble
const AIR_CLASS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class4.json");
const SHADOW_CLASS_FILE = path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class2.json"); // Air class JSON file for Repel Pulse
const INITIAL_BUTTON_POSITION = [-836.3657, 144.981659, 35.41477];
const MAGIC_CLASSES = [
    { position: [-836.9289, 145.18103, 35.39332], name: "Fire Magic", advantages: "Increases attack power and adds burn effect to enemies.", filePath: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class1.json") },
    { position: [-836.563965, 145.3806, 35.3559227], name: "Shadow Magic", advantages: "Increases stealth and agility, grants the ability to teleport through shadows, and disorients enemies with illusions.", filePath: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class2.json") },
    { position: [-836.109253, 145.396622, 35.2703857], name: "Earth Magic", advantages: "Increases defense and grants temporary invulnerability to physical attacks.", filePath: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class3.json") },
    { position: [-835.736145, 145.106812, 35.2247849], name: "Air Magic", advantages: "Enhances speed and agility, allowing quick dodges and increased jump height.", filePath: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class4.json") }
];

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


setInterval(() => checkMagicClassProximityForAllPlayers(), 2000);
setInterval(() => checkAndActivateRingOfFire(), 2000);
setInterval(() => checkAndActivateNightmare(), 2000);
setInterval(() => checkAndActivateFireball(), 2000);
setInterval(() => checkAndActivatePebble(), 2000);
setInterval(() => checkAndActivateRepelPulse(), 2000);
setInterval(() => checkAndActivateShadowTeleport(), 2000);
setInterval(() => checkAndActivateAwakenNight(), 2000);
setInterval(() => checkAndActivateOrbit(), 2000);
setInterval(() => checkAndActivateSkybound(), 2000);
setInterval(() => checkAndActivateStoneSkin(), 2000);
setInterval(() => checkAndActivateEarthquakeStomp(), 2000);
setInterval(() => checkAndActivateMudShot(), 2000);
setInterval(() => checkAndActivateWindSlash(), 2000);
setInterval(() => checkForFlamethrowerActivation(), 2000)

// Function to load Fire class players
function loadFireClassPlayers() {
    try {
        const data = fs.readFileSync(FIRE_CLASS_FILE, 'utf8');
        const parsedData = JSON.parse(data);
        return Array.isArray(parsedData) ? parsedData : [];
    } catch (error) {
        console.error(`Error loading Fire class file: ${error}`);
        return [];
    }
}

// Functions and logic start here
// Load Shadow class players from file
function loadShadowClassPlayers() {
    try {
        const data = fs.readFileSync(SHADOW_CLASS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading Shadow class file: ${error}`);
        return [];
    }
}

// Calculate distance between two 3D points
function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) +
        Math.pow(point2[1] - point1[1], 2) +
        Math.pow(point2[2] - point1[2], 2)
    );
}

// Calculate dot product of two vectors
function dot(vector1, vector2) {
    return vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];
}

function checkAndActivateEarthquakeStomp() {
    const earthClassPlayers = loadEarthClassPlayers();

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            // Check if player is eligible
            if (!earthClassPlayers.includes(player.username) || !isLevelTwoOrHigher(player.username)) return;

            if (earthquakeStompCooldowns[player.username]) return;

            const rightHandPosition = player.RightHandPosition;
            const leftHandPosition = player.LeftHandPosition;
            const headPosition = player.HeadPosition;

            const rightHandOnHead = calculateDistance(rightHandPosition, headPosition) <= 0.1;
            const leftHandAboveHead = leftHandPosition[1] > headPosition[1];

            // Activate if right hand is on head and left hand is above head
            if (rightHandOnHead && leftHandAboveHead) {
                connection.send(`player message "${player.username}" "Earthquake Stomp activated! Creating a shockwave..."`);

                // Start cooldown for this player
                earthquakeStompCooldowns[player.username] = true;
                setTimeout(() => delete earthquakeStompCooldowns[player.username], EARTHQUAKE_STOMP_COOLDOWN);

                const casterPosition = player.Position;
                const affectedPlayers = [];

                // Damage, stun, and teleport players within radius
                players.forEach(targetPlayer => {
                    const distance = calculateDistance(targetPlayer.Position, casterPosition);
                    if (distance <= EARTHQUAKE_STOMP_RADIUS && targetPlayer.username !== player.username) {
                        connection.send(`player damage "${targetPlayer.username}" ${EARTHQUAKE_STOMP_DAMAGE}`);
                        connection.send(`player modify-stat "${targetPlayer.username}" stun 1 ${EARTHQUAKE_STOMP_STUN_DURATION}`);
                        connection.send(`player message "${targetPlayer.username}" "You were hit by ${player.username}'s Earthquake Stomp!"`);

                        // Teleport player to a random position around the caster
                        const randomAngle = Math.random() * 2 * Math.PI;
                        const randomDistance = TELEPORT_DISTANCE_MIN + Math.random() * (TELEPORT_DISTANCE_MAX - TELEPORT_DISTANCE_MIN);
                        const newPosition = [
                            casterPosition[0] + randomDistance * Math.cos(randomAngle),
                            casterPosition[1],
                            casterPosition[2] + randomDistance * Math.sin(randomAngle)
                        ];
                        teleportPlayerToPosition(targetPlayer.username, newPosition);
                        affectedPlayers.push(targetPlayer.username);
                    }
                });

                // Inform caster of affected players
                if (affectedPlayers.length > 0) {
                    const affectedList = affectedPlayers.join(', ');
                    connection.send(`player message "${player.username}" "Earthquake Stomp affected: ${affectedList}"`);
                } else {
                    connection.send(`player message "${player.username}" "No players were affected by Earthquake Stomp."`);
                }
            }
        });
    }).catch(console.error);
}


// Function to check and activate Stone Skin
function checkAndActivateStoneSkin() {
    const earthClassPlayers = loadEarthClassPlayers();

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            // Check if player is in Earth class and level 2 or higher
            if (!earthClassPlayers.includes(player.username) || !isLevelTwoOrHigher(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (stoneSkinCooldowns[player.username]) {
                
                return;
            }

            const rightHandPosition = player.RightHandPosition;
            const headPosition = player.HeadPosition;
            const rightHandOnFace = calculateDistance(rightHandPosition, headPosition) <= 0.1;

            // Activate if right hand is on the face
            if (rightHandOnFace) {
                connection.send(`player message "${player.username}" "Stone Skin activated! Damage protection applied."`);

                // Start cooldown for this player
                stoneSkinCooldowns[player.username] = true;
                setTimeout(() => {
                    delete stoneSkinCooldowns[player.username];
                    
                }, STONE_SKIN_COOLDOWN);

                // Apply damage protection
                connection.send(`player modify-stat "${player.username}" damageprotection ${STONE_SKIN_PROTECTION_AMOUNT} ${STONE_SKIN_DURATION} true`);
            }
        });
    }).catch(console.error);
}




// Main function to activate Ring of Fire
function checkAndActivateRingOfFire() {
    const fireClassPlayers = loadFireClassPlayers(); // Load Fire class players

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;
        
        if (!Array.isArray(players)) return;

        players.forEach(player => {
            // Check if player is in Fire class and level 2 or higher
            if (!fireClassPlayers.includes(player.username) || !isLevelTwoOrHigher(player.username)) {
                
                return;
            }

            // Check if player is whitelisted
            if (!WHITELIST.includes(player.username)) return;

            const headPosition = player.HeadPosition;
            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;

            // Check if the player is on cooldown
            if (activeCooldowns[player.username]) return;

            // Check if right hand is near the face and left hand is above the head
            const rightHandToHeadDist = calculateDistance(rightHandPosition, headPosition);
            const leftHandAboveHead = leftHandPosition[1] > headPosition[1];
            
            if (rightHandToHeadDist <= HEAD_THRESHOLD && leftHandAboveHead) {
                
                connection.send(`player message "${player.username}" "You activated the Ring of Fire!"`);

                const casterPosition = player.Position;

                // Start the Ring of Fire
                const ringInterval = setInterval(() => {
                    connection.send('player list-detailed').then(resp => {
                        resp.data.Result.forEach(targetPlayer => {
                            const distance = calculateDistance(targetPlayer.Position, casterPosition);
                            if (distance <= RING_OF_FIRE_RADIUS && targetPlayer.username !== player.username) {
                                connection.send(`player damage "${targetPlayer.username}" ${RING_OF_FIRE_DAMAGE}`);
                                connection.send(`player message "${targetPlayer.username}" "You have been caught in the ring of fire!"`);
                            }
                        });
                    });
                }, DAMAGE_INTERVAL);

                // Stop the Ring of Fire after the duration
                setTimeout(() => {
                    clearInterval(ringInterval);
                }, RING_OF_FIRE_DURATION);

                // Set cooldown for the player
                activeCooldowns[player.username] = true;
                setTimeout(() => {
                    delete activeCooldowns[player.username];
                }, COOLDOWN_DURATION);
            }
        });
    }).catch(console.error);
}


function calculateDistance(point1, point2) {  return Math.sqrt(
    Math.pow(point2[0] - point1[0], 2) +
    Math.pow(point2[1] - point1[1], 2) +
    Math.pow(point2[2] - point1[2], 2)
);}

// Function to check and activate Mud Shot
function checkAndActivateMudShot() {
    const earthClassPlayers = loadEarthClassPlayers(); // Load Earth class players

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        players.forEach(player => {
            // Check if player is in the Earth class
            if (!earthClassPlayers.includes(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (mudShotCooldowns[player.username]) {
                
                return;
            }

            const leftHandPosition = player.LeftHandPosition;
            const headPosition = player.HeadPosition;
            const leftHandOnFaceDist = calculateDistance(leftHandPosition, headPosition);

            // Check if left hand is on face (Mud Shot activation condition)
            if (leftHandOnFaceDist <= 0.1) {
                connection.send(`player message "${player.username}" "Mud Shot activated! Waiting 3 seconds..."`);

                // Start cooldown for this player
                mudShotCooldowns[player.username] = true;
                setTimeout(() => {
                    delete mudShotCooldowns[player.username];
                    console.log(`Cooldown ended for ${player.username} on Mud Shot.`);
                }, MUD_SHOT_COOLDOWN);

                // Delay for 3 seconds before applying Mud Shot effect
                setTimeout(() => {
                    const casterForward = player.HeadForward;
                    const casterPosition = player.Position;
                    const affectedPlayers = [];

                    // Check for players in range and in front
                    players.forEach(targetPlayer => {
                        if (targetPlayer.username !== player.username) {
                            const distance = calculateDistance(targetPlayer.Position, casterPosition);
                            const vectorToTarget = [
                                targetPlayer.Position[0] - casterPosition[0],
                                targetPlayer.Position[1] - casterPosition[1],
                                targetPlayer.Position[2] - casterPosition[2]
                            ];
                            const dotProduct = dot(vectorToTarget, casterForward);

                            if (distance <= MUD_SHOT_RANGE && dotProduct > 0) {
                                // Apply damage and speed reduction to target
                                connection.send(`player damage "${targetPlayer.username}" ${MUD_SHOT_DAMAGE}`);
                                connection.send(`player modify-stat "${targetPlayer.username}" speed ${MUD_SHOT_SPEED_REDUCTION} ${MUD_SHOT_DURATION}`);
                                connection.send(`player message "${targetPlayer.username}" "You were hit by ${player.username}'s Mud Shot and slowed down!"`);
                                affectedPlayers.push(targetPlayer.username);
                            }
                        }
                    });

                    // Inform the caster of who was affected
                    if (affectedPlayers.length > 0) {
                        const affectedList = affectedPlayers.join(', ');
                        connection.send(`player message "${player.username}" "Mud Shot affected the following players: ${affectedList}"`);
                    } else {
                        connection.send(`player message "${player.username}" "No players were affected by Mud Shot."`);
                    }
                }, 3000); // 3-second delay before firing
            }
        });
    }).catch(error => console.error("Error in checkAndActivateMudShot:", error));
}


// Function to check and activate Orbit
function checkAndActivateOrbit() {
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            // Check if player is in Air class and level 2
            if (!airClassPlayers.includes(player.username) || !isLevelTwoOrHigher(player.username)) return;

            // Check if the player is on cooldown
            if (orbitCooldowns[player.username]) return;

            const leftHandPosition = player.LeftHandPosition;
            const headPosition = player.HeadPosition;

            // Activation condition: left hand above the head
            if (leftHandPosition[1] > headPosition[1]) {
                connection.send(`player message "${player.username}" "Orbit activated! Pulling in nearby players..."`);

                // Start cooldown for this player
                orbitCooldowns[player.username] = true;
                setTimeout(() => {
                    delete orbitCooldowns[player.username];
                    console.log(`Cooldown ended for ${player.username} on Orbit.`);
                }, ORBIT_COOLDOWN);

                const casterPosition = player.Position;
                const affectedPlayers = [];

                // Find players within orbit radius
                players.forEach(targetPlayer => {
                    const distance = calculateDistance(targetPlayer.Position, casterPosition);
                    if (distance <= ORBIT_RADIUS && targetPlayer.username !== player.username) {
                        affectedPlayers.push(targetPlayer);
                    }
                });

                // Rotate players around caster for the duration
                const startTime = Date.now();
                const orbitInterval = setInterval(() => {
                    const elapsedTime = Date.now() - startTime;
                    if (elapsedTime >= ORBIT_DURATION) {
                        clearInterval(orbitInterval);
                        connection.send(`player message "${player.username}" "Orbit ended."`);
                        return;
                    }

                    affectedPlayers.forEach((targetPlayer, index) => {
                        // Calculate angle for each player based on index and elapsed time
                        const angle = (index * (2 * Math.PI / affectedPlayers.length)) + (elapsedTime * ORBIT_ROTATION_SPEED);
                        const newPosition = [
                            casterPosition[0] + ORBIT_RADIUS * Math.cos(angle),
                            casterPosition[1],
                            casterPosition[2] + ORBIT_RADIUS * Math.sin(angle)
                        ];

                        // Teleport the player to the new position on the orbit
                        connection.send(`player teleport "${targetPlayer.username}" ${newPosition.join(" ")}`);
                    });
                }, 100); // Update rotation every 100ms
            }
        });
    }).catch(console.error);
}

// Helper function to calculate distance between two points
function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) +
        Math.pow(point2[1] - point1[1], 2) +
        Math.pow(point2[2] - point1[2], 2)
    );
}



const MENU_POSITION = [-844.5515, 145.039719, 36.39804];
const MENU_OPEN_RADIUS = 1;
const CHECK_INTERVAL = 1500;
const MENU_CLOSE_DELAY = 15000;
const CONFIRMATION_HOLD_DURATION = 10000;

const classFiles = {
    Fire: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class1.json"),
    Air: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class4.json"),
    Earth: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class3.json"),
    Shadow: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class2.json"),
};

const progressFiles = {
    Fire: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\fire_class_progress.json"),
    Air: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\air_class_progress.json"),
    Earth: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\earth_class_progress.json"),
    Shadow: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\shadow_class_progress.json"),
};

const menuOptions = ["Remove Power", "Stats", "Exit"];
let activeMenus = {};
let menuSelectionCooldowns = {};
let confirmationTimers = {};

function openMenuForPlayer(player) {
    activeMenus[player.username] = { 
        options: menuOptions, 
        selectedIndex: 0, 
        locked: false 
    };
    connection.send(`player message "${player.username}" "Menu Opened: Use right hand above/below head to navigate, hands together to select."`);
    displayMenu(player);
}

function displayMenu(player) {
    const menu = activeMenus[player.username];
    const menuText = menu.options.map((option, index) =>
        index === menu.selectedIndex ? `> ${option} <` : option
    ).join("\n");
    connection.send(`player message "${player.username}" "${menuText}"`);
}

function confirmRemovePower(player) {
    connection.send(`player message "${player.username}" "Are you sure you want to remove your power? This will erase all your data. If sure, hold your hands together for 10 seconds."`);

    confirmationTimers[player.username] = setTimeout(() => {
        checkHandsTogetherForConfirmation(player);
    }, CONFIRMATION_HOLD_DURATION);
}

function checkHandsTogetherForConfirmation(player) {
    connection.send('player list-detailed').then(response => {
        const playerData = response?.data?.Result.find(p => p.username === player.username);
        if (!playerData) return;

        const handsTogether = calculateDistance(playerData.LeftHandPosition, playerData.RightHandPosition) < 0.2;

        if (handsTogether) {
            removePlayerFromClassAndProgress(player.username);
            connection.send(`player message "${player.username}" "Your power has been removed and data erased."`);
        } else {
            connection.send(`player message "${player.username}" "Confirmation failed. Please try again."`);
        }
    }).catch(console.error);
}

function removePlayerFromClassAndProgress(username) {
    Object.values(classFiles).forEach(filePath => {
        let classData;
        try {
            classData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (error) {
            console.error(`Error reading class file: ${filePath}`, error);
            return;
        }

        const updatedClassData = classData.filter(player => player !== username);
        fs.writeFileSync(filePath, JSON.stringify(updatedClassData, null, 2), 'utf-8');
    });

    Object.values(progressFiles).forEach(progressPath => {
        let progressData;
        try {
            progressData = JSON.parse(fs.readFileSync(progressPath, 'utf-8'));
        } catch (error) {
            console.error(`Error reading progress file: ${progressPath}`, error);
            return;
        }

        delete progressData[username];
        fs.writeFileSync(progressPath, JSON.stringify(progressData, null, 2), 'utf-8');
    });
}

function selectMenuOption(player) {
    const menu = activeMenus[player.username];
    const selectedOption = menu.options[menu.selectedIndex];
    
    connection.send(`player message "${player.username}" "You selected: ${selectedOption}"`);
    
    menu.locked = true;

    switch (selectedOption) {
        case "Remove Power":
            confirmRemovePower(player);
            break;
        case "Stats":
            showPlayerStats(player.username);
            break;
        case "Exit":
            exitMenuForPlayer(player);
            return;
    }

    setTimeout(() => {
        exitMenuForPlayer(player);
    }, MENU_CLOSE_DELAY);
}

function showPlayerStats(username) {
    const playerClass = getPlayerClass(username);
    if (!playerClass) {
        connection.send(`player message "${username}" "No class or progress data found."`);
        return;
    }

    const progressFilePath = progressFiles[playerClass];
    let progressData;
    
    try {
        progressData = JSON.parse(fs.readFileSync(progressFilePath, 'utf-8'));
    } catch (error) {
        console.error(`Error reading progress file for ${username}:`, error);
        connection.send(`player message "${username}" "Unable to load progress data."`);
        return;
    }

    const playerProgress = progressData[username];
    if (!playerProgress) {
        connection.send(`player message "${username}" "No progress data found."`);
        return;
    }

    // Display player progress stats
    const progressMessage = `
        Class: ${playerClass}
        Level: ${playerProgress.level}
        XP: ${playerProgress.xp}
    `;
    connection.send(`player message "${username}" "${progressMessage}"`);
}

function getPlayerClass(username) {
    for (const [className, filePath] of Object.entries(classFiles)) {
        let classData;
        try {
            classData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (error) {
            console.error(`Error reading class file: ${filePath}`, error);
            continue;
        }

        if (classData.includes(username)) {
            return className;
        }
    }
    return null;
}

function exitMenuForPlayer(player) {
    delete activeMenus[player.username];
    connection.send(`player message "${player.username}" "Menu closed."`);
}

function checkPlayerPositionAndOpenMenu() {
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;

            if (calculateDistance(leftHandPosition, MENU_POSITION) <= MENU_OPEN_RADIUS || calculateDistance(rightHandPosition, MENU_POSITION) <= MENU_OPEN_RADIUS) {
                if (!activeMenus[player.username]) {
                    openMenuForPlayer(player);
                }
            }
        });
    }).catch(console.error);
}

function updateMenuSelection() {
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            const menu = activeMenus[player.username];
            if (!menu || menu.locked) return;

            const rightHandPosition = player.RightHandPosition;
            const headPosition = player.HeadPosition;
            const handsTogether = calculateDistance(player.LeftHandPosition, rightHandPosition) < 0.2;

            if (handsTogether && !menuSelectionCooldowns[player.username]) {
                selectMenuOption(player);
                menuSelectionCooldowns[player.username] = true;
                setTimeout(() => delete menuSelectionCooldowns[player.username], 1000);
                return;
            }

            if (rightHandPosition[1] > headPosition[1]) {
                menu.selectedIndex = (menu.selectedIndex - 1 + menu.options.length) % menu.options.length;
                displayMenu(player);
            } else if (rightHandPosition[1] < headPosition[1]) {
                menu.selectedIndex = (menu.selectedIndex + 1) % menu.options.length;
                displayMenu(player);
            }
        });
    }).catch(console.error);
}

function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) +
        Math.pow(point2[1] - point1[1], 2) +
        Math.pow(point2[2] - point1[2], 2)
    );
}

setInterval(checkPlayerPositionAndOpenMenu, CHECK_INTERVAL);
setInterval(updateMenuSelection, CHECK_INTERVAL);


const T_POSE_VERTICAL_THRESHOLD = 0.1; // Threshold for hand height similarity
const T_POSE_HORIZONTAL_THRESHOLD = 0.5; // Threshold for hand horizontal positioning similarity on X-axis
const T_POSE_FORWARD_THRESHOLD = 0.7; // Threshold to check if hands are facing forward

function checkForTPose() {
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;
            const leftHandForward = player.LeftHandForward;
            const rightHandForward = player.RightHandForward;

            // Check if hands are approximately at the same vertical level
            const handsAreLevel = Math.abs(leftHandPosition[1] - rightHandPosition[1]) <= T_POSE_VERTICAL_THRESHOLD;

            // Check if hands are roughly in the same horizontal position on the X-axis (sideways stretch)
            const handsAreHorizontallyAligned = Math.abs(leftHandPosition[0] - rightHandPosition[0]) <= T_POSE_HORIZONTAL_THRESHOLD;

            // Check if hands are pointing forward (close to -Z direction)
            const leftHandIsForward = Math.abs(leftHandForward[2]) >= T_POSE_FORWARD_THRESHOLD;
            const rightHandIsForward = Math.abs(rightHandForward[2]) >= T_POSE_FORWARD_THRESHOLD;

            // Confirm T-pose by combining all checks
            if (handsAreLevel && handsAreHorizontallyAligned && leftHandIsForward && rightHandIsForward) {
                connection.send(`player message "${player.username}" "T-pose detected!"`);
            }
        });
    }).catch(console.error);
}

// Helper function to calculate distance between two points
function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) +
        Math.pow(point2[1] - point1[1], 2) +
        Math.pow(point2[2] - point1[2], 2)
    );
}

// Periodically check for T-pose


connection.subscribe('InventoryChanged', (event) => {
    // Log the full event data whenever the inventory changes
    console.log("InventoryChanged event detected:");
    console.log(JSON.stringify(event, null, 2));

    // Optionally, send a message to the player or perform additional actions
    const username = event.data?.username || "Unknown";
    connection.send(`player message "${username}" "Inventory has been updated."`);
});


function checkAndActivateShadowTeleport() {
    const shadowClassPlayers = loadShadowClassPlayers();

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            // Check if player is in Shadow class and is at least level 1
            if (!shadowClassPlayers.includes(player.username) || !isLevelOneOrHigher(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (shadowTeleportCooldowns[player.username]) {
                
                return;
            }

            const leftHandPosition = player.LeftHandPosition;
            const headPosition = player.HeadPosition;
            const leftHandOnFaceDist = calculateDistance(leftHandPosition, headPosition);

            // Activate if left hand is on the face
            if (leftHandOnFaceDist <= 0.1) {
                connection.send(`player message "${player.username}" "Shadow Teleport activated! Finding nearest target..."`);

                // Start cooldown for this player
                shadowTeleportCooldowns[player.username] = true;
                setTimeout(() => {
                    delete shadowTeleportCooldowns[player.username];
                    
                }, SHADOW_TELEPORT_COOLDOWN);

                const casterPosition = player.Position;
                let closestPlayer = null;
                let minDistance = Infinity;

                // Find the closest player
                players.forEach(targetPlayer => {
                    if (targetPlayer.username !== player.username) {
                        const distance = calculateDistance(targetPlayer.Position, casterPosition);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestPlayer = targetPlayer;
                        }
                    }
                });

                // Teleport behind the closest player
                if (closestPlayer) {
                    const targetPosition = closestPlayer.Position;
                    const offset = 1; // Offset distance behind the target
                    const directionToCaster = [
                        casterPosition[0] - targetPosition[0],
                        casterPosition[1] - targetPosition[1],
                        casterPosition[2] - targetPosition[2]
                    ];
                    const magnitude = Math.sqrt(directionToCaster[0]**2 + directionToCaster[1]**2 + directionToCaster[2]**2);
                    const normalizedDirection = [
                        directionToCaster[0] / magnitude,
                        directionToCaster[1] / magnitude,
                        directionToCaster[2] / magnitude
                    ];

                    const teleportPosition = [
                        targetPosition[0] + normalizedDirection[0] * offset,
                        targetPosition[1],
                        targetPosition[2] + normalizedDirection[2] * offset
                    ];

                    teleportPlayerToPosition(player.username, teleportPosition);
                    connection.send(`player message "${player.username}" "Teleported behind ${closestPlayer.username}!"`);
                } else {
                    connection.send(`player message "${player.username}" "No target found nearby for Shadow Teleport."`);
                }
            }
        });
    }).catch(console.error);
}



// Function to teleport a player to a specific position
function teleportPlayerToPosition(username, position) {
    const cords = `${position[0]},${position[1]},${position[2]}`;
   
    connection.send(`player set-home ${username} ${cords}`);
    connection.send(`player teleport ${username} home`);
    connection.send(`player set-home ${username} 0,0,0`);
   
}

function loadShadowClassPlayers() {
    try {
        const data = fs.readFileSync(SHADOW_CLASS_FILE, 'utf8');
        const parsedData = JSON.parse(data);
        // Ensure parsedData is an array, otherwise return an empty array
        return Array.isArray(parsedData) ? parsedData : [];
    } catch (error) {
        console.error(`Error loading Shadow class file: ${error}`);
        return [];
    }
}

// Load player progress data (assuming levels are stored here)
function loadPlayerProgress() {
    const progressFiles = [
        EARTH_CLASS_PROGRESS_FILE,
        FIRE_CLASS_PROGRESS_FILE,
        AIR_CLASS_PROGRESS_FILE,
        SHADOW_CLASS_PROGRESS_FILE
    ];

    const allPlayerProgress = [];

    progressFiles.forEach(filePath => {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const players = JSON.parse(data);

            if (Array.isArray(players)) {
                allPlayerProgress.push(...players); // Add players from each file to combined list
            } else {
                console.warn(`Data in ${filePath} is not an array.`);
            }
        } catch (error) {
            console.error(`Error loading progress from ${filePath}:`, error);
        }
    });

    return allPlayerProgress;
}

// Function to check if a player is level 2 or higher
function isLevelTwoOrHigher(username) {
    const playerProgress = loadPlayerProgress(); // Load progress with levels
    const playerData = playerProgress.find(player => player.username === username);
    
    if (!playerData) {
        
        return false;
    }

    
    return playerData.level >= 2; // Ensure this correctly returns true for level 2 or higher
}

function isLevelOneOrHigher(username) {
    const playerProgress = loadPlayerProgress(); // Loads all player progress data
    const playerData = playerProgress.find(player => player.username === username);

    if (!playerData) {
        console.log(`No progress data found for ${username}.`);
        return false;
    }

    console.log(`Checking level for ${username}: Current level is ${playerData.level}`);
    return playerData.level >= 1;
}

// Function to check and activate Awaken Night
function checkAndActivateAwakenNight() {
    const shadowClassPlayers = loadShadowClassPlayers(); // Load Shadow class players

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        players.forEach(player => {
            

            // Check if player is in the Shadow class
            if (!shadowClassPlayers.includes(player.username)) {
                
                return;
            }

            // Check if player is level 2 or higher
            if (!isLevelTwoOrHigher(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (awakenNightCooldowns[player.username]) {
                
                return;
            }

            const rightHandPosition = player.RightHandPosition;
            const headPosition = player.HeadPosition;
            const leftHandPosition = player.LeftHandPosition;

            const rightHandOnFaceDist = calculateDistance(rightHandPosition, headPosition);
            const leftHandAboveHead = leftHandPosition[1] > headPosition[1];

            

            // Check if right hand is on face and left hand is raised
            if (rightHandOnFaceDist <= 0.1 && leftHandAboveHead) {
                

                connection.send(`player message "${player.username}" "Awaken Night activated. Setting time to night..."`);

                // Start cooldown for this player
                awakenNightCooldowns[player.username] = true;
                setTimeout(() => {
                    delete awakenNightCooldowns[player.username];
                    
                }, AWAKEN_NIGHT_COOLDOWN);

                // Set time to night
                connection.send(`time set Night`);
                
            } else {
                
            }
        });
    }).catch();
}

// Function to check and activate Nightmare power
function checkAndActivateNightmare() {   
    const shadowClassPlayers = loadShadowClassPlayers(); // Load Shadow class players

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            return;
        }

        players.forEach(player => {
            // Check if player is in the Shadow class
            if (!shadowClassPlayers.includes(player.username)) {
                return; // Skip if the player is not in the Shadow class
            }

            // Check if the player is on cooldown
            if (nightmareCooldowns[player.username]) {
                return;
            }

            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;
            const handsTogetherDist = calculateDistance(leftHandPosition, rightHandPosition);

            // Check if hands are held together
            if (handsTogetherDist <= NIGHTMARE_TOGETHER_THRESHOLD) {
                connection.send(`player message "${player.username}" "Nightmare power activated. Checking targets in 3 seconds..."`);

                // Start cooldown for this player
                nightmareCooldowns[player.username] = true;
                setTimeout(() => {
                    delete nightmareCooldowns[player.username];
                }, NIGHTMARE_COOLDOWN_DURATION);

                // Wait 3 seconds before checking for targets in front
                setTimeout(() => {
                    connection.send('player list-detailed').then(resp => {
                        const casterData = resp.data.Result.find(p => p.username === player.username);
                        if (!casterData) return;

                        const casterForward = casterData.HeadForward;
                        const casterPosition = casterData.Position;
                        const affectedPlayers = [];

                        resp.data.Result.forEach(targetPlayer => {
                            // Calculate if the target is within the radius in front of the hands
                            const distance = calculateDistance(targetPlayer.Position, casterPosition);
                            if (distance <= NIGHTMARE_RADIUS && targetPlayer.username !== player.username) { // Exclude caster
                                const vectorToTarget = [
                                    targetPlayer.Position[0] - casterPosition[0],
                                    targetPlayer.Position[1] - casterPosition[1],
                                    targetPlayer.Position[2] - casterPosition[2]
                                ];
                                const dotProduct = dot(vectorToTarget, casterForward);

                                // If the dot product is positive, target is in front
                                if (dotProduct > 0) {
                                    connection.send(`player modify-stat "${targetPlayer.username}" nightmare 1 ${NIGHTMARE_EFFECT_DURATION}`);
                                    connection.send(`player message "${targetPlayer.username}" "You have been inflicted with a nightmare!"`);
                                    affectedPlayers.push(targetPlayer.username);
                                }
                            }
                        });

                        // Inform the caster of who was affected
                        if (affectedPlayers.length > 0) {
                            const affectedList = affectedPlayers.join(', ');
                            connection.send(`player message "${player.username}" "Nightmare effect applied to: ${affectedList}"`);
                        } else {
                            connection.send(`player message "${player.username}" "No players were affected by the Nightmare effect."`);
                        }
                    });
                }, 3000);
            }
        });
    }).catch(console.error);
}
// Function to check and activate Fireball ability
function checkAndActivateFireball() {
    const fireClassPlayers = loadFireClassPlayers(); // Load Fire class players

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        players.forEach(player => {
            // Check if player is in the Fire class
            if (!fireClassPlayers.includes(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (fireballCooldowns[player.username]) {
                
                return;
            }

            const rightHandPosition = player.RightHandPosition;
            const headPosition = player.HeadPosition;

            const rightHandOnFaceDist = calculateDistance(rightHandPosition, headPosition);

            // Check if right hand is on face (Fireball casting condition)
            if (rightHandOnFaceDist <= 0.1) {
                connection.send(`player message "${player.username}" "Casting Fireball!"`);

                // Start cooldown for this player
                fireballCooldowns[player.username] = true;
                setTimeout(() => {
                    delete fireballCooldowns[player.username];
                   
                }, FIREBALL_COOLDOWN);

                // Fireball effect logic here, e.g., damage nearby players
                applyFireballEffect(player.username);
            } else {
               
            }
        });
    }).catch(error => console.error("Error in checkAndActivateFireball:", error));
}

// Function to apply Fireball effect (damage, burn, etc.)
// Function to apply Fireball effect (damage, burn, etc.)
function applyFireballEffect(username) {
   

    // Get the caster's details to determine direction and position
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;
        const caster = players.find(player => player.username === username);

        if (!caster) {
            
            return;
        }

        const casterForward = caster.HeadForward;
        const casterPosition = caster.Position;
        const affectedPlayers = []; // Track players who are hit by the Fireball

        players.forEach(targetPlayer => {
            // Skip if the target is the caster
            if (targetPlayer.username === username) {
                return;
            }

            // Calculate if the target is within the radius and in front of the caster
            const distance = calculateDistance(targetPlayer.Position, casterPosition);
            const vectorToTarget = [
                targetPlayer.Position[0] - casterPosition[0],
                targetPlayer.Position[1] - casterPosition[1],
                targetPlayer.Position[2] - casterPosition[2]
            ];
            const dotProduct = dot(vectorToTarget, casterForward);

            if (distance <= FIREBALL_RADIUS && dotProduct > 0) {
                // Apply damage and message target
                connection.send(`player damage "${targetPlayer.username}" ${FIREBALL_DAMAGE}`); // Adjust damage as needed
                connection.send(`player message "${targetPlayer.username}" "You were hit by ${username}'s Fireball!"`);
                
                affectedPlayers.push(targetPlayer.username); // Add to affected list
            }
        });

        // Inform the caster of who was hit
        if (affectedPlayers.length > 0) {
            const affectedList = affectedPlayers.join(', ');
            connection.send(`player message "${username}" "Fireball hit the following players: ${affectedList}"`);
        } else {
            connection.send(`player message "${username}" "Fireball did not hit any players."`);
        }
    }).catch(error => console.error("Error in applyFireballEffect:", error));
}

function applyBurnEffect(targetUsername) {     
    
    let ticks = BURN_DURATION / BURN_INTERVAL; // Calculate total burn ticks

    // Apply burn damage at each interval
    const burnInterval = setInterval(() => {
        if (ticks <= 0) {
            clearInterval(burnInterval); // Stop the burn effect after duration
            
        } else {
            connection.send(`player damage ${targetUsername} ${BURN_DAMAGE}`);
            connection.send(`player message "${targetUsername}" "You are burning! Taking ${BURN_DAMAGE} damage."`);
            ticks--;
        }
    }, BURN_INTERVAL);}
function isInFront(casterPosition, casterForward, targetPosition) {const directionToTarget = [
    targetPosition[0] - casterPosition[0],
    targetPosition[1] - casterPosition[1],
    targetPosition[2] - casterPosition[2]
];
const dotProduct = (directionToTarget[0] * casterForward[0]) +
                   (directionToTarget[1] * casterForward[1]) +
                   (directionToTarget[2] * casterForward[2]);
return dotProduct > 0; // Positive dot product indicates the target is in front
}

// Function to check and activate Wind Slash
function checkAndActivateWindSlash() {
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) return;

        players.forEach(player => {
            // Check if player is in Air class
            if (!airClassPlayers.includes(player.username)) return;

            // Check if the player is on cooldown
            if (windSlashCooldowns[player.username]) return;

            const rightHandPosition = player.RightHandPosition;
            const headPosition = player.HeadPosition;

            // Check if right hand is above head using calculateDistance
            if (calculateDistance(rightHandPosition, headPosition) > 0 && rightHandPosition[1] > headPosition[1]) {
                connection.send(`player message "${player.username}" "Wind Slash activated! Pushing back nearby players..."`);

                // Start cooldown for this player
                windSlashCooldowns[player.username] = true;
                setTimeout(() => {
                    delete windSlashCooldowns[player.username];
                    console.log(`Cooldown ended for ${player.username} on Wind Slash.`);
                }, WIND_SLASH_COOLDOWN);

                const casterPosition = player.Position;
                const affectedPlayers = [];

                // Apply Wind Slash to players within radius
                players.forEach(targetPlayer => {
                    const distance = calculateDistance(targetPlayer.Position, casterPosition);
                    if (distance <= WIND_SLASH_RADIUS && targetPlayer.username !== player.username) {
                        // Push target player away
                        const pushDirection = calculatePushDirection(casterPosition, targetPlayer.Position);
                        const newPosition = [
                            targetPlayer.Position[0] + pushDirection[0] * PUSH_DISTANCE,
                            targetPlayer.Position[1] + pushDirection[1] * PUSH_DISTANCE,
                            targetPlayer.Position[2] + pushDirection[2] * PUSH_DISTANCE
                        ];

                        // Teleport the player to the new position
                        connection.send(`player teleport "${targetPlayer.username}" ${newPosition.join(" ")}`);
                        connection.send(`player damage "${targetPlayer.username}" ${WIND_SLASH_DAMAGE}`);
                        connection.send(`player message "${targetPlayer.username}" "You were hit by Wind Slash!"`);
                        affectedPlayers.push(targetPlayer.username);
                    }
                });

                // Inform the caster of affected players
                if (affectedPlayers.length > 0) {
                    const affectedList = affectedPlayers.join(', ');
                    connection.send(`player message "${player.username}" "Wind Slash affected: ${affectedList}"`);
                } else {
                    connection.send(`player message "${player.username}" "No players were affected by Wind Slash."`);
                }
            }
        });
    }).catch(console.error);
}

// Helper function to calculate distance between two points
function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) +
        Math.pow(point2[1] - point1[1], 2) +
        Math.pow(point2[2] - point1[2], 2)
    );
}

// Helper function to calculate the push direction
function calculatePushDirection(casterPosition, targetPosition) {
    const directionVector = [
        targetPosition[0] - casterPosition[0],
        targetPosition[1] - casterPosition[1],
        targetPosition[2] - casterPosition[2]
    ];
    
    const magnitude = Math.sqrt(
        directionVector[0] ** 2 + 
        directionVector[1] ** 2 + 
        directionVector[2] ** 2
    );
    
    return [
        directionVector[0] / magnitude,
        directionVector[1] / magnitude,
        directionVector[2] / magnitude
    ];
}

function checkForFlamethrowerActivation() {   
    
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        // Load the list of players in the fire class
        let fireClassPlayersFlamethrower = [];
        try {
            const data = fs.readFileSync(FIRE_CLASS_FILE_FLAMETHROWER, 'utf8');
            fireClassPlayersFlamethrower = JSON.parse(data);
            
            // Ensure fireClassPlayersFlamethrower is an array
            if (!Array.isArray(fireClassPlayersFlamethrower)) {
                fireClassPlayersFlamethrower = [];
            }
        } catch (error) {
            
        }

        players.forEach(player => {
            const username = player.username;

            // Check if the player is in the fire class
            if (!fireClassPlayersFlamethrower.includes(username)) {
                return; // Skip if the player is not in the fire class
            }

            // Check if the player is on cooldown
            if (activeFlamethrowers[username]?.lastUsed && Date.now() - activeFlamethrowers[username].lastUsed < FLAMETHROWER_COOLDOWN) {
                return; // Skip if the player is still on cooldown
            }

            // Check if the player is already using the flamethrower
            if (activeFlamethrowers[username]?.active) {
                return; // Skip if the flamethrower is currently active
            }

            const leftHandPositionFlamethrower = player.LeftHandPosition;
            const rightHandPositionFlamethrower = player.RightHandPosition;
            const headPositionFlamethrower = player.HeadPosition;
            const headForwardFlamethrower = player.HeadForward;

            // Check if the left hand is close to the face to activate the flamethrower
            const isLeftHandOnFaceFlamethrower = calculateDistance(leftHandPositionFlamethrower, headPositionFlamethrower) <= 0.3;

            // If the left hand is on the face, activate the flamethrower
            if (isLeftHandOnFaceFlamethrower) {
                
                activeFlamethrowers[username] = { active: true, lastUsed: Date.now() }; // Mark the flamethrower as active and set cooldown

                // Notify the player
                connection.send(`player message "${username}" "Activating Flamethrower"`);

                // Start the flamethrower effect for 4 seconds
                const flamethrowerInterval = setInterval(() => {
                    // Find players in front of the right hand within range
                    players.forEach(target => {
                        if (target.username !== username) {
                            const targetPositionFlamethrower = target.Position;

                            // Check if the target is within the flamethrower range and in front of the right hand
                            if (isInFront(rightHandPositionFlamethrower, headForwardFlamethrower, targetPositionFlamethrower) && calculateDistance(rightHandPositionFlamethrower, targetPositionFlamethrower) <= FLAMETHROWER_EFFECT_RANGE) {
                                // Apply flamethrower damage to the target
                                connection.send(`player damage ${target.username} ${FLAMETHROWER_DAMAGE_PER_TICK}`);
                                connection.send(`player message "${target.username}" "You are caught in the flames!"`);

                                // Apply burn effect with a 100% chance
                                applyBurnEffectFlamethrower(target.username, FLAMETHROWER_DAMAGE_PER_TICK);
                            }
                        }
                    });
                }, FLAMETHROWER_TICK_INTERVAL);

                // Stop the flamethrower after 4 seconds
                setTimeout(() => {
                    clearInterval(flamethrowerInterval);
                   
                    connection.send(`player message "${username}" "Flamethrower deactivated"`);
                    activeFlamethrowers[username].active = false; // Reset flamethrower state
                }, FLAMETHROWER_TOTAL_DURATION);
            }
        });
    }).catch(console.error); }
function applyBurnEffectFlamethrower(targetUsername, burnDamage) {    
    
let burnTicksFlamethrower = BURN_DURATION / BURN_INTERVAL; // Calculate total burn ticks

// Apply burn damage at each interval
const burnIntervalFlamethrower = setInterval(() => {
    if (burnTicksFlamethrower <= 0) {
        clearInterval(burnIntervalFlamethrower); // Stop the burn effect after duration
        
    } else {
        connection.send(`player damage ${targetUsername} ${burnDamage}`);
        connection.send(`player message "${targetUsername}" "You are burning! Taking ${burnDamage} damage."`);
        burnTicksFlamethrower--;
    }
}, BURN_INTERVAL); }

function checkMagicClassProximityForAllPlayers() {  
    console.log('checking shit');
    
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        players.forEach(player => {
            const username = player.username;
            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;

            // Initialize player state if not already set
            if (!playerActivationState[username]) {
                playerActivationState[username] = { selectedClass: null, awaitingConfirmation: false, hasClass: null, notified: false };
            }

            const playerState = playerActivationState[username];

            // Check if the player is within the general proximity area of the buttons
            const inGeneralProximity = MAGIC_CLASSES.some(magicClass => 
                calculateDistance(leftHandPosition, magicClass.position) <= GENERAL_PROXIMITY_RADIUS || 
                calculateDistance(rightHandPosition, magicClass.position) <= GENERAL_PROXIMITY_RADIUS
            );

            if (!inGeneralProximity) {
                playerState.notified = false; // Reset notification state when out of range
                return; // Skip further checks if the player is not within the general proximity
            }

            // Check if the player already has a class saved and store the result in player state
            if (playerState.hasClass === null) {
                playerState.hasClass = checkIfPlayerHasClass(username);
            }

            // If the player has a class and is in proximity, notify them only once
            if (playerState.hasClass) {
                if (!playerState.notified) {
                    connection.send(`player message "${username}" "You already have a magic class selected. You cannot choose a new one."`);
                    playerState.notified = true; // Mark that the player has been notified
                }
                return; // Exit further checks for this player
            }

            // Step 1: Allow player to view class advantages if within the general proximity
            MAGIC_CLASSES.forEach((magicClass) => {
                const targetPosition = magicClass.position;

                // Check proximity of left and right hands to each magic class position
                const isLeftHandClose = calculateDistance(leftHandPosition, targetPosition) <= PROXIMITY_RADIUS;
                const isRightHandClose = calculateDistance(rightHandPosition, targetPosition) <= PROXIMITY_RADIUS;

                // If either hand is close enough to a magic class position
                if (isLeftHandClose || isRightHandClose) {
                    
                    connection.send(`player message "${username}" "You are viewing ${magicClass.name}. Advantages: ${magicClass.advantages}"`);
                    playerState.selectedClass = magicClass; // Set the selected class for potential saving
                }
            });

            // Step 2: Check if the player touches the initial button to initiate confirmation
            const isLeftHandOnInitialButton = calculateDistance(leftHandPosition, INITIAL_BUTTON_POSITION) <= PROXIMITY_RADIUS;
            const isRightHandOnInitialButton = calculateDistance(rightHandPosition, INITIAL_BUTTON_POSITION) <= PROXIMITY_RADIUS;

            if ((isLeftHandOnInitialButton || isRightHandOnInitialButton) && playerState.selectedClass && !playerState.awaitingConfirmation) {
                // Prompt player to hold hands together for final confirmation
                connection.send(`player message "${username}" "To confirm ${playerState.selectedClass.name}, hold your hands together."`);
                playerState.awaitingConfirmation = true;
                return;
            }

            // Step 3: Check if the player is holding their hands together to confirm selection
            if (playerState.awaitingConfirmation) {
                const handsTogetherDist = calculateDistance(leftHandPosition, rightHandPosition);

                if (handsTogetherDist <= HANDS_TOGETHER_THRESHOLD) {
                    // Save the selected class
                    savePlayerClass(username, playerState.selectedClass);
                    connection.send(`player message "${username}" "Your magic class ${playerState.selectedClass.name} has been set and saved!"`);
                    
                    // Reset player state after saving
                    playerState.selectedClass = null;
                    playerState.awaitingConfirmation = false;
                    playerState.hasClass = true; // Mark that the player now has a class
                    playerState.notified = true; // Set notification so they won't try to select again
                }
            }
        });
    }).catch(console.error); }
function checkIfPlayerHasClass(username) {  return MAGIC_CLASSES.some(magicClass => {
    const filePath = magicClass.filePath;
    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const classData = JSON.parse(data);

            // Ensure classData is an array before using includes
            if (Array.isArray(classData)) {
                return classData.includes(username);
            }
        } catch (error) {
            console.error(`Error reading or parsing file ${filePath}:`, error);
        }
    }
    return false;
}); }
function savePlayerClass(username, magicClass) { 
    const filePath = magicClass.filePath;
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        let classData = [];
        if (!err && data) {
            try {
                classData = JSON.parse(data);
                // Ensure classData is an array
                if (!Array.isArray(classData)) {
                    classData = [];
                }
            } catch (error) {
                console.error(`Error parsing JSON from ${filePath}:`, error);
                classData = [];
            }
        }
  
        // Add the username to the class data if it's not already there
        if (!classData.includes(username)) {
            classData.push(username);
            fs.writeFile(filePath, JSON.stringify(classData, null, 2), err => {
                if (err) {
                    console.error(`Error saving class for ${username} to ${filePath}:`, err);
                } else {
                 
                }
            });
        }
    }); }
function loadEarthClassPlayers() {  try {
    const data = fs.readFileSync(EARTH_CLASS_FILE, 'utf8');
    const earthClassPlayers = JSON.parse(data);
    return Array.isArray(earthClassPlayers) ? earthClassPlayers : [];
} catch (error) {
    console.error(`Error reading earth class file for Pebble: ${error}`);
    return [];
} }
function checkAndActivatePebble() {   const earthClassPlayers = loadEarthClassPlayers(); // Load earth class players for Pebble power
    
    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            return;
        }

        players.forEach(player => {
            const username = player.username;

            // Check if the player is in the earth class
            if (!earthClassPlayers.includes(username)) {
                return; // Skip if the player is not in the earth class
            }

            // Check if the player is on cooldown
            if (pebbleCooldowns[username]) {
                return; // Skip if the player is still on cooldown
            }

            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;
            const headForward = player.HeadForward;
            const handsTogetherDist = calculateDistance(leftHandPosition, rightHandPosition);

            // Step 1: Detect hands together to start the Pebble power
            if (handsTogetherDist <= 0.1 && !activePebbleUsers[username]?.handsTogether) {
                activePebbleUsers[username] = { handsTogether: true };
                connection.send(`player message "${username}" "Step 1: Hands together detected for Pebble power. Aim with right hand to fire."`);
                return; // Wait for the next step
            }

            // Step 2: Detect aiming with the right hand and fire the pebble
            if (activePebbleUsers[username]?.handsTogether) {
                // Find the target in front of the right hand within range
                const target = findTargetInFront(players, rightHandPosition, headForward, PEBBLE_RANGE, username);
                if (target) {
                    connection.send(`player message "${username}" "Pebble fired!"`);
                    connection.send(`player message "${target.username}" "Hit by pebble!"`);
                    connection.send(`player damage ${target.username} ${PEBBLE_DAMAGE}`);

                    // Start cooldown for this player
                    pebbleCooldowns[username] = true;
                    setTimeout(() => {
                        delete pebbleCooldowns[username];
                        
                    }, PEBBLE_COOLDOWN_DURATION);

                    // Reset the activation state for the player
                    delete activePebbleUsers[username];
                }
            }
        });
    }).catch(console.error);
}

// Function to calculate distance between two 3D points
function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) +
        Math.pow(point2[1] - point1[1], 2) +
        Math.pow(point2[2] - point1[2], 2)
    );
}



// Function to find a target within range and in front of the right hand
function findTargetInFront(players, rightHandPosition, headForward, range, username) {
    let closestTarget = null;
    let closestDistance = range;

    players.forEach(target => {
        if (target.username !== username) {
            const targetPosition = target.Position;
            const distance = calculateDistance(rightHandPosition, targetPosition);

            if (distance <= range && isInFront(rightHandPosition, headForward, targetPosition)) {
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestTarget = target;
                }
            }
        }
    });

    return closestTarget;
}

// Utility function to check if a target is in front of the caster based on hand position and forward direction
function isInFront(handPosition, forwardDirection, targetPosition) {
    const directionToTarget = [
        targetPosition[0] - handPosition[0],
        targetPosition[1] - handPosition[1],
        targetPosition[2] - handPosition[2]
    ];
    const dotProduct = (directionToTarget[0] * forwardDirection[0]) +
                       (directionToTarget[1] * forwardDirection[1]) +
                       (directionToTarget[2] * forwardDirection[2]);
    return dotProduct > 0; // Positive dot product indicates the target is in fro
     }
function findTargetInFront(players, rightHandPosition, headForward, range, username) {  let closestTarget = null;
    let closestDistance = range;

    players.forEach(target => {
        if (target.username !== username) {
            const targetPosition = target.Position;
            const distance = calculateDistance(rightHandPosition, targetPosition);

            if (distance <= range && isInFront(rightHandPosition, headForward, targetPosition)) {
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestTarget = target;
                }
            }
        }
    });

    return closestTarget; }

function loadAirClassPlayers() {    try {
    const data = fs.readFileSync(AIR_CLASS_FILE, 'utf8');
    const airClassPlayers = JSON.parse(data);
    return Array.isArray(airClassPlayers) ? airClassPlayers : [];
} catch (error) {
    console.error(`Error reading air class file for Repel Pulse: ${error}`);
    return [];
} }


// Function to check and activate Skybound
function checkAndActivateSkybound() {
    const airClassPlayers = loadAirClassPlayers(); // Load Air class players

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        players.forEach(player => {
            // Check if player is in the Air class and is at least level 2
            if (!airClassPlayers.includes(player.username) || !isLevelTwoOrHigher(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (skyboundCooldowns[player.username]) {
              
                return;
            }

            const leftHandPosition = player.LeftHandPosition;
            const headPosition = player.HeadPosition;
            const leftHandOnHeadDist = calculateDistance(leftHandPosition, headPosition);

            // Check if the left hand is on the head (Skybound activation condition)
            if (leftHandOnHeadDist <= 0.1) {
                connection.send(`player message "${player.username}" "Skybound activated! Leaping high into the air..."`);

                // Start cooldown for this player
                skyboundCooldowns[player.username] = true;
                setTimeout(() => {
                    delete skyboundCooldowns[player.username];
                    
                }, SKYBOUND_COOLDOWN);

                // Enable god mode to prevent fall damage
                connection.send(`player god-mode ${player.username} true`);
                setTimeout(() => {
                    connection.send(`player god-mode ${player.username} false`);
                  
                }, GOD_MODE_DURATION);

                // Calculate the new position with added height
                const currentPosition = player.Position;
                const newPosition = [
                    currentPosition[0],
                    currentPosition[1] + SKYBOUND_JUMP_HEIGHT,
                    currentPosition[2]
                ];

                // Move player upwards
                teleportPlayerToPosition(player.username, newPosition);
                

                // Push back nearby players
                const affectedPlayers = [];
                players.forEach(targetPlayer => {
                    if (targetPlayer.username !== player.username) {
                        const distance = calculateDistance(targetPlayer.Position, currentPosition);
                        if (distance <= SKYBOUND_PUSH_RADIUS) {
                            // Calculate push direction
                            const vectorToTarget = [
                                targetPlayer.Position[0] - currentPosition[0],
                                targetPlayer.Position[1] - currentPosition[1],
                                targetPlayer.Position[2] - currentPosition[2]
                            ];
                            const magnitude = Math.sqrt(vectorToTarget[0]**2 + vectorToTarget[1]**2 + vectorToTarget[2]**2);
                            const pushDirection = [
                                vectorToTarget[0] / magnitude,
                                vectorToTarget[1] / magnitude,
                                vectorToTarget[2] / magnitude
                            ];
                            const pushPosition = [
                                targetPlayer.Position[0] + pushDirection[0] * SKYBOUND_PUSH_DISTANCE,
                                targetPlayer.Position[1],
                                targetPlayer.Position[2] + pushDirection[2] * SKYBOUND_PUSH_DISTANCE
                            ];

                            // Push the player to the new position
                            teleportPlayerToPosition(targetPlayer.username, pushPosition);
                            connection.send(`player message "${targetPlayer.username}" "You were pushed back by ${player.username}'s Skybound!"`);
                            affectedPlayers.push(targetPlayer.username);
                        }
                    }
                });

                // Inform the caster of who was affected
                if (affectedPlayers.length > 0) {
                    const affectedList = affectedPlayers.join(', ');
                    connection.send(`player message "${player.username}" "Skybound pushed back the following players: ${affectedList}"`);
                } else {
                    connection.send(`player message "${player.username}" "No players were affected by Skybound."`);
                }
            }
        });
    }).catch(error => console.error("Error in checkAndActivateSkybound:", error));
}



function checkAndActivateRepelPulse() {  
    

    const airClassPlayers = loadAirClassPlayers(); // Load air class players for Repel Pulse
    

    connection.send('player list-detailed').then(response => {
        const players = response?.data?.Result;

        if (!Array.isArray(players)) {
            
            return;
        }

        players.forEach(player => {
           

            // Check if the player is in the air class
            if (!airClassPlayers.includes(player.username)) {
                
                return;
            }

            // Check if the player is on cooldown
            if (repelCooldowns[player.username]) {
                
                return;
            }

            const leftHandPosition = player.LeftHandPosition;
            const rightHandPosition = player.RightHandPosition;
            const handsTogetherDist = calculateDistance(leftHandPosition, rightHandPosition);

            // Step 1: Detect hands together
            if (handsTogetherDist <= REPEL_HANDS_TOGETHER_THRESHOLD && !lastGestureState[player.username]?.handsTogether) {
             
                
                // Mark the hands together gesture
                lastGestureState[player.username] = {
                    handsTogether: true,
                    initialHandHeight: Math.min(leftHandPosition[1], rightHandPosition[1])
                };
                connection.send(`player message "${player.username}" "Step 1: Hands together detected. put 1 hand down"`);
                return;
            }

            // Step 2: Detect hands separated below initial height
            if (lastGestureState[player.username]?.handsTogether) {
                const initialHeight = lastGestureState[player.username].initialHandHeight;
                const currentHandHeight = Math.min(leftHandPosition[1], rightHandPosition[1]);

               

                if (handsTogetherDist >= REPEL_HANDS_SEPARATED_THRESHOLD && currentHandHeight < initialHeight) {
                    

                    connection.send(`player message "${player.username}" "Repel Pulse activated! Pushing away nearby players."`);

                    // Start cooldown for this player
                    repelCooldowns[player.username] = true;
                    setTimeout(() => {
                        delete repelCooldowns[player.username];
                       
                    }, REPEL_COOLDOWN_DURATION);

                    // Reset gesture state for the player
                    delete lastGestureState[player.username];

                    // Teleport nearby players away from the caster
                    connection.send('player list-detailed').then(resp => {
                        const casterData = resp.data.Result.find(p => p.username === player.username);
                        if (!casterData) return;

                        const casterPosition = casterData.Position;
                        const affectedPlayers = [];

                        resp.data.Result.forEach(targetPlayer => {
                            const distance = calculateDistance(targetPlayer.Position, casterPosition);
                            if (distance <= REPEL_RADIUS && targetPlayer.username !== player.username) {
                               

                                // Calculate the new position by pushing the target away from the caster
                                const vectorToTarget = [
                                    targetPlayer.Position[0] - casterPosition[0],
                                    targetPlayer.Position[1] - casterPosition[1],
                                    targetPlayer.Position[2] - casterPosition[2]
                                ];
                                const magnitude = Math.sqrt(vectorToTarget[0]**2 + vectorToTarget[1]**2 + vectorToTarget[2]**2);
                                const pushDirection = [
                                    vectorToTarget[0] / magnitude,
                                    vectorToTarget[1] / magnitude,
                                    vectorToTarget[2] / magnitude
                                ];
                                const newPosition = [
                                    casterPosition[0] + pushDirection[0] * REPEL_PUSH_DISTANCE,
                                    casterPosition[1] + pushDirection[1] * REPEL_PUSH_DISTANCE,
                                    casterPosition[2] + pushDirection[2] * REPEL_PUSH_DISTANCE
                                ];

                                // Use teleport sequence to move the player
                                teleportPlayerToPosition(targetPlayer.username, newPosition);
                                affectedPlayers.push(targetPlayer.username);
                            }
                        });

                        // Inform the caster of who was affected
                        if (affectedPlayers.length > 0) {
                            const affectedList = affectedPlayers.join(', ');
                           
                            connection.send(`player message "${player.username}" "Repel Pulse applied to: ${affectedList}"`);
                        } else {
                            
                            connection.send(`player message "${player.username}" "No players were affected by Repel Pulse."`);
                        }
                    }).catch(err => console.error(`Error fetching player list for Repel Pulse: ${err}`));
                }
            }
        });
    }).catch(console.error);  }
function teleportPlayerToPosition(username, position) {   const cords = `${position[0]},${position[1]},${position[2]}`;

connection.send(`player set-home ${username} ${cords}`);
connection.send(`player teleport ${username} home`);
connection.send(`player set-home ${username} 0,0,0`);
 }



setInterval(() => checkMagicClassProximityForAllPlayers, checkAndActivateRingOfFire(), checkAndActivateNightmare(), checkAndActivateFireball(), checkAndActivatePebble(), checkAndActivateRepelPulse(), checkAndActivateShadowTeleport(), checkAndActivateAwakenNight(), checkAndActivateOrbit(), checkAndActivateSkybound(), checkAndActivateStoneSkin(), checkAndActivateEarthquakeStomp(), checkAndActivateMudShot(), 2000);






// Paths to class files and progress files
const CLASS_FILES = {
    fire: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class1.json"),
    earth: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class3.json"),
    air: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class4.json"),
    shadow: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\class2.json")
};

const PROGRESS_FILES = {
    fire: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\fire_class_progress.json"),
    earth: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\earth_class_progress.json"),
    air: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\air_class_progress.json"),
    shadow: path.join("C:\\Users\\reape\\Documents\\GitHub\\Att-Starter\\shadow_class_progress.json")
};

function calculateXPToLevelUp(level) {
    return Math.floor(BASE_XP_TO_LEVEL_UP * Math.pow(XP_INCREASE_FACTOR, level - 1));
}

// Function to handle awarding XP to the player
function awardXPToPlayer(username, progressFilePath) {
    let progressData = [];
    try {
        const data = fs.readFileSync(progressFilePath, 'utf8');
        progressData = JSON.parse(data);
        if (!Array.isArray(progressData)) progressData = [];
    } catch (error) {
        console.error(`Error reading progress file ${progressFilePath}: ${error}`);
    }

    // Find or create player data for XP and level tracking
    let playerData = progressData.find(player => player.username === username);
    if (!playerData) {
        playerData = { username, xp: 0, level: 1 };
        progressData.push(playerData);
    }

    // Award random XP between MIN_XP_PER_KILL and MAX_XP_PER_KILL
    const xpAwarded = Math.floor(Math.random() * (MAX_XP_PER_KILL - MIN_XP_PER_KILL + 1)) + MIN_XP_PER_KILL;
    playerData.xp += xpAwarded;

    // Calculate required XP to level up
    const xpToLevelUp = calculateXPToLevelUp(playerData.level);
    if (playerData.xp >= xpToLevelUp) {
        playerData.xp -= xpToLevelUp;
        playerData.level += 1;
        
        connection.send(`player message "${username}" "Congratulations! You have leveled up to level ${playerData.level}."`);
    } else {
        
    }

    // Save the updated progress data
    fs.writeFile(progressFilePath, JSON.stringify(progressData, null, 2), err => {
        if (err) {
            console.error(`Error saving XP for ${username} in ${progressFilePath}: ${err}`);
        } else {
            
        }
    });
}

// Subscription to handle XP gain for ObjectKilled events
connection.subscribe('ObjectKilled', (event) => {
    const data = event.data;
    if (data.killerPlayer) {
        const { username } = data.killerPlayer;
        
        // Determine the player's class and progress file
        let progressFilePath;
        if (isFireClass(username)) {
            progressFilePath = PROGRESS_FILES.fire;
        } else if (isEarthClass(username)) {
            progressFilePath = PROGRESS_FILES.earth;
        } else if (isAirClass(username)) {
            progressFilePath = PROGRESS_FILES.air;
        } else if(isShadowClass(username)) {
            progressFilePath = PROGRESS_FILES.shadow
        } else {
            console.log(`No class file found for ${username}. Please add them to the appropriate class file.`);
            return;
        }

        // Award XP to the player
        awardXPToPlayer(username, progressFilePath);
    }
});

function isFireClass(username) {
    const fireClassData = loadClassData(CLASS_FILES.fire);
    return fireClassData.includes(username);
}

function isEarthClass(username) {
    const earthClassData = loadClassData(CLASS_FILES.earth);
    return earthClassData.includes(username);
}

function isAirClass(username) {
    const airClassData = loadClassData(CLASS_FILES.air);
    return airClassData.includes(username);
}

function isShadowClass(username){
    const shadowClassData = loadClassData(CLASS_FILES.shadow);
    return shadowClassData.includes(username)
}

// Utility function to load class data from a file
function loadClassData(classFilePath) {
    try {
        const data = fs.readFileSync(classFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading class data from ${classFilePath}: ${error}`);
        return [];
    }
}






    setInterval(() => {
      connection.send('player list').then(response => {
        const players = response.data.Result;

        for(var i = 0; i < players; i++ ){
          console.log(players[i].username)
      }
    })
  }, 2000);





  });








main()
