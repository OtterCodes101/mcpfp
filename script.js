const defaultGradients = {
	0: {
		identifier: "default",
		colors: ["#00cdac", "#02aab0"],
	},
	1: {
		identifier: "rainbow",
		colors: [
			"#FF0000",
			"#FF7F00",
			"#FFFF00",
			"#00FF00",
			"#0000FF",
			"#4B0082",
			"#9400D3",
		],
	},
	2: {
		identifier: "instagram",
		colors: ["#833ab4", "#fd1d1d", "#fcb045"],
	},
	3: {
		identifier: "fire",
		colors: ["#A10100", "#DA3604", "#FE650D", "#FFC11F", "#FFF75D"],
	},
	4: {
		identifier: "amethyst",
		colors: ["#D93894", "#B327BB", "#6E48AA"],
	},
	5: {
		identifier: "tiktok",
		colors: ["#FF0050", "#4B0018", "#00F2EA"],
	},
	6: {
		identifier: "rose",
		colors: ["#F4C4F3", "#FC67FA"],
	},
};
let availableFrames = {
	"amethyst-greek": {
		name: "Amethyst Greek",
		featureName: "Amethyst Greek frame",
		image: "frames/amethyst-greek.png",
		start: 6,
		end: 56,
	},
	"base-blue": {
		name: "Base Blue",
		featureName: "Base Blue Frame",
		image: "frames/base-blue.png",
		start: 7,
		end: 33,
	},
	"base-lime": {
		name: "Base Lime",
		featureName: "Base Lime Frame",
		image: "frames/base-lime.png",
		start: 7,
		end: 33,
	},
	"base-orange": {
		name: "Base Orage",
		featureName: "Base Orange Frame",
		image: "frames/base-orange.png",
		start: 7,
		end: 33,
	},
	"base-red": {
		name: "Base Red",
		featureName: "Base Red Frame",
		image: "frames/base-red.png",
		start: 7,
		end: 33,
	},
	basic: {
		name: "Basic",
		featureName: "Basic frame",
		image: "frames/basic.png",
		start: 5,
		end: 26,
	},
	"basic-blue": {
		name: "Basic Blue",
		featureName: "Basic Blue frame",
		image: "frames/basic-blue.png",
		start: 5,
		end: 26,
	},
	"basic-emerald": {
		name: "Basic Emerald",
		featureName: "Basic Emerald frame",
		image: "frames/basic-emerald.png",
		start: 5,
		end: 26,
	},
	"basic-redstone": {
		name: "Basic Redstone",
		featureName: "Basic Redstone frame",
		image: "frames/basic-redstone.png",
		start: 5,
		end: 26,
	},
	"blue-obsidian": {
		name: "Blue Obisidan",
		featureName: "Blue Obisidan Frame",
		image: "frames/blue-obsidian.png",
		start: 3,
		end: 27,
	},
	"blue-weird": {
		name: "Blue Weird",
		featureName: "Blue Weird Frame",
		image: "frames/blue-weird.png",
		start: 5,
		end: 35,
	},
	"bronze-greek": {
		name: "Bronze Greek",
		featureName: "Bronze Greek frame",
		image: "frames/bronze-greek.png",
		start: 6,
		end: 56,
	},
	"brown-obsidian": {
		name: "Brown Obisidan",
		featureName: "Brown Obisidan Frame",
		image: "frames/brown-obsidian.png",
		start: 3,
		end: 27,
	},
	"dark-futuristic": {
		name: "Dark Futuristic",
		featureName: "Dark Futuristic Frame",
		image: "frames/dark-futuristic.png",
		start: 9,
		end: 39,
	},
	"diamond-plate": {
		name: "Diamond Plate",
		featureName: "Diamond Plate Frame",
		image: "frames/diamond-plate.png",
		start: 5,
		end: 95,
	},
	"diamond-sign": {
		name: "Diamond Sign",
		featureName: "Diamond Sign Frame",
		image: "frames/diamond-sign.png",
		start: [21, 42],
		end: 76,
	},
	"elegant-blossom": {
		name: "Elegant Blossom",
		featureName: "Elegant Blossom frame",
		image: "frames/elegant-blossom.png",
		start: 7,
		end: 57,
	},
	"elegant-golden": {
		name: "Elegant Golden",
		featureName: "Elegant Golden frame",
		image: "frames/elegant-golden.png",
		start: 7,
		end: 57,
	},
	"elegant-sapphire": {
		name: "Elegant Sapphire",
		featureName: "Elegant Sapphire frame",
		image: "frames/elegant-sapphire.png",
		start: 7,
		end: 57,
	},
	"elegant-slime": {
		name: "Elegant Slime",
		featureName: "Elegant Slime frame",
		image: "frames/elegant-slime.png",
		start: 7,
		end: 57,
	},
	"emerald-greek": {
		name: "Emerald Greek",
		featureName: "Emerald Greek frame",
		image: "frames/emerald-greek.png",
		start: 6,
		end: 56,
	},
	"emerald-plate": {
		name: "Emerald Plate",
		featureName: "Emerald Plate Frame",
		image: "frames/emerald-plate.png",
		start: 5,
		end: 95,
	},
	"emerald-sign": {
		name: "Emerald Sign",
		featureName: "Emerald Sign Frame",
		image: "frames/emerald-sign.png",
		start: [21, 42],
		end: 76,
	},
	futuristic: {
		name: "Futuristic",
		featureName: "Futuristic Frame",
		image: "frames/futuristic.png",
		start: 9,
		end: 39,
	},
	"gold-plate": {
		name: "Gold Plate",
		featureName: "Gold Plate Frame",
		image: "frames/gold-plate.png",
		start: 5,
		end: 95,
	},
	"gold-sign": {
		name: "Gold Sign",
		featureName: "Gold Sign Frame",
		image: "frames/gold-sign.png",
		start: [21, 42],
		end: 76,
	},
	"golden-greek": {
		name: "Golden Greek",
		featureName: "Golden Greek frame",
		image: "frames/golden-greek.png",
		start: 6,
		end: 56,
	},
	"green-weird": {
		name: "Green Weird",
		featureName: "Green Weird Frame",
		image: "frames/green-weird.png",
		start: 5,
		end: 35,
	},
	"iron-plate": {
		name: "Iron Plate",
		featureName: "Iron Plate Frame",
		image: "frames/iron-plate.png",
		start: 5,
		end: 95,
	},
	"luxury-Diamond": {
		name: "Luxury Diamond",
		featureName: "Luxury Diamond Frame",
		image: "frames/luxury-Diamond.png",
		start: 6,
		end: 52,
	},
	"luxury-emerald": {
		name: "Luxury Emerald",
		featureName: "Luxury Emerald Frame",
		image: "frames/luxury-emerald.png",
		start: 6,
		end: 52,
	},
	"luxury-gold": {
		name: "Luxury Gold",
		featureName: "Luxury Gold Frame",
		image: "frames/luxury-gold.png",
		start: 6,
		end: 52,
	},
	"luxury-obsidian": {
		name: "Luxury Obisidian",
		featureName: "Luxury Obisidian Frame",
		image: "frames/luxury-obsidian.png",
		start: 6,
		end: 52,
	},
	"mossy-obsidian": {
		name: "Mossy Obisidan",
		featureName: "Mossy Obisidan Frame",
		image: "frames/mossy-obsidian.png",
		start: 3,
		end: 27,
	},
	obsidian: {
		name: "Obisidan",
		featureName: "Obisidan Frame",
		image: "frames/obsidian.png",
		start: 3,
		end: 27,
	},
	"obsidian-greek": {
		name: "Obsidian Greek",
		featureName: "Obsidian Greek frame",
		image: "frames/obsidian-greek.png",
		start: 6,
		end: 56,
	},
	"obsidian-sign": {
		name: "Obisidian Sign",
		featureName: "Obisidian Sign Frame",
		image: "frames/obsidian-sign.png",
		start: [21, 42],
		end: 76,
	},
	"orange-greek": {
		name: "Orange Greek",
		featureName: "Orange Greek frame",
		image: "frames/orange-greek.png",
		start: 6,
		end: 56,
	},
	"peach-weird": {
		name: "Peach Weird",
		featureName: "Peach Weird Frame",
		image: "frames/peach-weird.png",
		start: 5,
		end: 35,
	},
	"pink-futuristic": {
		name: "Pink Futuristic",
		featureName: "Pink Futuristic Frame",
		image: "frames/pink-futuristic.png",
		start: 9,
		end: 39,
	},
	"pink-obsidian": {
		name: "Pink Obisidan",
		featureName: "Pink Obisidan Frame",
		image: "frames/pink-obsidian.png",
		start: 3,
		end: 27,
	},
	"pixel-blue": {
		name: "Pixel Blue",
		featureName: "Pixel Blue Frame",
		image: "frames/pixel-blue.png",
		start: 4,
		end: 36,
	},
	"pixel-gold": {
		name: "Pixel Gold",
		featureName: "Pixel Gold Frame",
		image: "frames/pixel-gold.png",
		start: 4,
		end: 36,
	},
	"pixel-pink": {
		name: "Pixel Pink",
		featureName: "Pixel Pink Frame",
		image: "frames/pixel-pink.png",
		start: 4,
		end: 36,
	},
	"pixel-white": {
		name: "Pixel White",
		featureName: "Pixel White Frame",
		image: "frames/pixel-white.png",
		start: 4,
		end: 36,
	},
	"purple-weird": {
		name: "Purple Weird",
		featureName: "Purple Weird Frame",
		image: "frames/purple-weird.png",
		start: 5,
		end: 35,
	},
	"quartz-greek": {
		name: "Quartz Greek",
		featureName: "Quartz Greek frame",
		image: "frames/quartz-greek.png",
		start: 6,
		end: 56,
	},
	"red-futuristic": {
		name: "Red Futuristic",
		featureName: "Red Futuristic Frame",
		image: "frames/red-futuristic.png",
		start: 9,
		end: 39,
	},
	"sky-greek": {
		name: "Sky Greek",
		featureName: "Sky Greek frame",
		image: "frames/sky-greek.png",
		start: 6,
		end: 56,
	},
	"swamp-obsidian": {
		name: "Swamp Obisidan",
		featureName: "Swamp Obisidan Frame",
		image: "frames/swamp-obsidian.png",
		start: 3,
		end: 27,
	},
	"white-obsidian": {
		name: "White Obisidan",
		featureName: "White Obisidan Frame",
		image: "frames/white-obsidian.png",
		start: 3,
		end: 27,
	},
	"yellow-obsidian": {
		name: "Yellow Obisidan",
		featureName: "Yellow Obisidan Frame",
		image: "frames/yellow-obsidian.png",
		start: 3,
		end: 27,
	},
};

const defaultCooldown = 3;
let buttonsToToggleDarkMode = [
	"appearance",
	"inputText",
	"download-all",
	"colors-amount",
	"button-toggle-custom-gradient-div",
	"button-remove-watermark-download-div",
	"button-custom-background-div",
	"button-revert-skin-div",
	"button-shadow-div",
	"button-no-background-div",
	"customskindiv",
	"button-pixelate-background-div",
];

function toggleDarkmode() {
	if (document.getElementById("darkmode").checked == true) {
		document.body.classList.add("dark");
		//document.getElementById('result').classList.add("darktextboxes");
		for (let n of buttonsToToggleDarkMode) {
			let d = document.getElementById(n);
			if (d) {
				d.classList.remove("lightbuttonboxes");
				d.classList.add("darkbuttonboxes");
			}
		}
		let success = document.getElementById("success_message");
		if (success) {
			success.classList.remove("successlight");
			success.classList.add("successdark");
		}
	} else {
		document.body.classList.remove("dark");
		//Buttons
		for (let n of buttonsToToggleDarkMode) {
			let d = document.getElementById(n);
			if (d) {
				d.classList.remove("darkbuttonboxes");
				d.classList.add("lightbuttonboxes");
			}
		}
		let success = document.getElementById("success_message");
		if (success) {
			success.classList.remove("successdark");
			success.classList.add("successlight");
		}
	}
}

// Called in index.html
function downloadProfile() {
	var anchor = document.createElement("a");
	anchor.href = siteCanvas.toDataURL("image/png");
	let username = usernameInput?.value || "lax1dude";
	anchor.download = `MinecraftPFP-${username}.png`;
	anchor.click();
}

// Called in index.html
function toggleCustomGradientBox(event) {
	let customGradientBox = document.getElementById("custom-gradient-box");
	let customGradientsOpened = document.getElementById(
		"button-toggle-custom-gradient"
	).checked;
	if (customGradientsOpened) {
		if (event) backgroundType = 2;
		customGradientBox.classList.add("expanded");
		updateSkin(true);
	} else {
		backgroundType = 0;
		customGradientBox.classList.remove("expanded");
		updateSkin(true);
	}
}

// Called in index.html
function toggleFrameBox() {
	let theBox = document.getElementById("frame-box");
	let boxOpened = document.getElementById("button-toggle-frame").checked;
	if (boxOpened) {
		theBox.classList.add("expanded");
	} else {
		theBox.classList.remove("expanded");
		if (typeof frameRendered != "undefined") {
			frameRendered = undefined;
			updateSkin();
		}
	}
}

let colorsButton = document.getElementById("colors-amount");
const maxColorsAmount = 15;

// Called in index.html
function removeColor(event) {
	if (event) backgroundType = 2;
	let currentAmount = colorsButton.innerText;
	if (isNaN(currentAmount)) {
		currentAmount = 2;
		colorsButton.innerText = currentAmount;
	} else {
		currentAmount--;
		if (currentAmount < 2) {
			currentAmount = 2;
		}
		colorsButton.innerText = currentAmount;
	}
	//console.log(`Current amount: ${currentAmount}`);
	for (let i = maxColorsAmount; i >= currentAmount; i--) {
		let pickerToHide = document.getElementById(`color-picker-${i}`);
		//console.log(`Hiding color #${i}`);
		if (pickerToHide) {
			pickerToHide.style.display = "none";
		}
	}
	if (event) updateSkin(true);
}
function addColor() {
	backgroundType = 2;
	let currentAmount = colorsButton.innerText;
	if (isNaN(currentAmount)) {
		currentAmount = 2;
		colorsButton.innerText = currentAmount;
	} else {
		currentAmount++;
		if (currentAmount > maxColorsAmount) {
			currentAmount = maxColorsAmount;
		}
		colorsButton.innerText = currentAmount;
	}
	//console.log(`Current amount: ${currentAmount}`);
	for (let i = 0; i < currentAmount; i++) {
		let pickerToShow = document.getElementById(`color-picker-${i}`);
		//console.log(`Showing color #${i}`);
		if (pickerToShow) {
			pickerToShow.style.display = "";
		}
	}
	updateSkin(true);
}

let loadedSkinBuffer = undefined;
const usernameInput = document.getElementById("inputText");
const usernameInputDiv = document.getElementById("inputTextDiv");
const cacheSkins = new Map();

async function processUsername(order) {
	if (order != "no-cooldown") blockUsername(defaultCooldown);
	let username = usernameInput?.value || "lax1dude";
	let fullSkin;
	let inCache = cacheSkins.has(username.toLowerCase());
	if (inCache) {
		fullSkin = cacheSkins.get(username.toLowerCase());
		loadedSkinBuffer = fullSkin;
	} else {
		let url = `https://minotar.net/skin/${username}.png`;
		try {
			fullSkin = await loadImageWithCheck(url);
			loadedSkinBuffer = fullSkin;
		} catch (e) {
			drawFailed();
			return;
		}
		cacheSkins.set(username.toLowerCase(), fullSkin);
	}
	//Fetch skin logic
	updateSkin(inCache);
}
async function loadImageWithCheck(url) {
	let response = await fetch(url);
	if (!response.ok) {
		throw new Error(
			`Failed to load image: ${response.status} ${response.statusText}`
		);
	}
	const blob = await response.blob();
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error("Error loading image"));
		img.src = URL.createObjectURL(blob);
	});
}
function createGradient(ctx, colours) {
	if (!colours) {
		if (typeof defaultGradients[currentGradient] !== "undefined") {
			colours = defaultGradients[currentGradient].colors;
			//console.log(`Creating gradient.. ${defaultGradients[currentGradient].identifier}`)
		} else {
			colours = defaultGradients[0].colors;
			//console.log(`Creating gradient.. ${defaultGradients[0].identifier}`)
		}
	} else {
		//console.log(`Creating custom gradient.. ${colours}`)
	}
	const gradient = ctx.createLinearGradient(0, 0, 20, 20);
	//const gradient = ctx.createLinearGradient(0, 0, 18.75, 18.75);

	let interval = 1;
	const decrement = 1 / (colours.length - 1);
	colours.forEach((colour) => {
		//console.log(`Fixed: ${interval.toFixed(5)}`);
		//console.log(`Adding color stop interval: ${interval}${interval>1?` CAUTION GREATER+!`:``}${interval<0?` CAUTION LOWER-!`:``}`)
		gradient.addColorStop(Math.max(0, interval), colour);
		interval -= decrement;
	});
	ctx.fillStyle = gradient;
	//ctx.fillRect(0, 0, 18.75, 18.75);
	ctx.fillRect(0, 0, 20, 20);
	return ctx;
}

// Called in index.html
function previousGradient() {
	backgroundType = 0;
	if (typeof defaultGradients[currentGradient - 1] !== "undefined") {
		currentGradient--;
	} else currentGradient = Object.keys(defaultGradients).length - 1;
	let customGradientsOpened = document.getElementById(
		"button-toggle-custom-gradient"
	);
	if (customGradientsOpened.checked) {
		let customGradientBox = document.getElementById("custom-gradient-box");
		customGradientBox.classList.remove("expanded");
		customGradientsOpened.checked = false;
	}
	updateSkin(true);
}

// Called in index.html
function nextGradient() {
	backgroundType = 0;
	if (typeof defaultGradients[currentGradient + 1] !== "undefined") {
		currentGradient++;
	} else currentGradient = 0;
	let customGradientsOpened = document.getElementById(
		"button-toggle-custom-gradient"
	);
	if (customGradientsOpened.checked) {
		let customGradientBox = document.getElementById("custom-gradient-box");
		customGradientBox.classList.remove("expanded");
		customGradientsOpened.checked = false;
	}
	updateSkin(true);
}
let backgroundType = 0; //0 - gradient | 1 - image | 2 - custom gradient
let currentGradient = 0;
function togglePixelateBorderBox() {
	let effectBox = document.getElementById("pixelate-background-box");
	let effectOption = document.getElementById(
		"button-pixelate-background"
	).checked;
	if (effectOption) {
		//document.getElementById("button-pixelate-background").checked = false;
		effectBox.classList.add("expanded");
	} else {
		effectBox.classList.remove("expanded");
	}
}
function modifyPixelateBackgroundWidth(event, toAdd) {
	let customSize = document.getElementById("pixelate-background-size");
	let newSize =
		parseInt(customSize.innerText) +
		toAdd * (event.ctrlKey || event.altKey ? 2 : 1);
	if (newSize <= 1) {
		customSize.innerText = 1;
	} else {
		customSize.innerText = Math.max(1, Math.min(100, newSize));
	}
	updateSkin(true);
}
function pixelateCtx(ctx) {
	let customSize = document.getElementById("pixelate-background-size");
	let size = parseInt(customSize.innerText);
	let c = ctx.canvas,
		w = c.width,
		h = c.height;
	let tmp = document.createElement("canvas");
	tmp.width = w / size;
	tmp.height = h / size;
	let tctx = tmp.getContext("2d");
	tctx.drawImage(c, 0, 0, tmp.width, tmp.height);
	ctx.imageSmoothingEnabled = false;
	ctx.clearRect(0, 0, w, h);
	ctx.drawImage(tmp, 0, 0, w, h);
}
let addX = 0,
	addY = 0;
function moveIcon(direction, event) {
	let revertSkin = document.getElementById("button-revert-skin").checked;
	let toModify = event.altKey || event.shiftKey ? 5 : 1;
	toModify = ["left", "right"].includes(direction)
		? revertSkin
			? toModify * -1
			: toModify
		: toModify;
	if (direction == "left") addX = Math.max(-250, addX - toModify);
	else if (direction == "right") addX = Math.min(250, addX + toModify);
	else if (direction == "up") addY = Math.max(0, addY - toModify);
	else addY = Math.min(250, addY + toModify);
	updateSkin(true);
}
let logoBuffer;

let frameRendered = undefined;
async function updateSkin(inCache = true) {
	let pixelateBackground = document.getElementById(
		"button-pixelate-background"
	).checked;
	let revertSkin = document.getElementById("button-revert-skin").checked;
	let shadow = document.getElementById("button-shadow").checked;
	let transparentBackground = document.getElementById(
		"button-no-background"
	).checked;
	let finalCanvas = document.getElementById("final-canvas");
	finalCanvas.width = 300;
	finalCanvas.height = 300;
	let finalCtx = finalCanvas.getContext("2d");
	finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
	finalCtx.imageSmoothingEnabled = true;
	//
	let backgroundCtx = backgroundCanvas.getContext("2d");
	if (!transparentBackground) {
		finalCanvas.style.border = "1px solid #d3d3d3";
		if (backgroundType == 0) {
			backgroundCtx.clearRect(
				0,
				0,
				backgroundCtx.canvas.width,
				backgroundCtx.canvas.height
			);
			createGradient(backgroundCtx);
			finalCtx.drawImage(backgroundCanvas, 0, 0);
		} else if (backgroundType == 1) {
			finalCtx.drawImage(backgroundCanvas, 0, 0);
		} else {
			backgroundCtx.clearRect(
				0,
				0,
				backgroundCtx.canvas.width,
				backgroundCtx.canvas.height
			);
			let currentAmount = isNaN(colorsButton.innerText)
				? 2
				: Math.max(
						2,
						Math.min(
							maxColorsAmount,
							parseInt(colorsButton.innerText)
						)
				  );
			createGradient(
				backgroundCtx,
				defaultColors.slice(0, currentAmount)
			);
			finalCtx.drawImage(backgroundCanvas, 0, 0);
		}
		if (pixelateBackground) {
			pixelateCtx(finalCtx);
		}
	} else {
		finalCanvas.style.border = "none";
	}
	let skinCtx = skinCanvas.getContext("2d");
	skinCtx.clearRect(0, 0, skinCanvas.width, skinCanvas.height);
	skinCtx.imageSmoothingEnabled = false;

	if (shadow) {
		skinCtx.drawImage(backdropBuffer, 0, 0, 20, 20);
	}
	//console.log(`Type of loadedSkinBuffer: ${typeof loadedSkinBuffer}`);
	if (loadedSkinBuffer.height === 32) {
		skinCtx.drawImage(loadedSkinBuffer, 8, 9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 5, 9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
		skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
	} else {
		// * BOTTOM LAYER
		skinCtx.drawImage(loadedSkinBuffer, 8, 9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 5, 9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 36, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
		skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
		addY +
			// * TOP LAYER addY +
			skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
		skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
		skinCtx.drawImage(loadedSkinBuffer, 52, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (top layer)
		skinCtx.drawImage(loadedSkinBuffer, 52, 36, 3, 7, 5, 13, 3, 7); // Arm Left Side (top layer)
		skinCtx.drawImage(loadedSkinBuffer, 20, 37, 8, 8, 6, 12, 8, 8); // Chest Other (top layer)
		skinCtx.drawImage(loadedSkinBuffer, 21, 36, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (top layer)
	}
	skinCtx.drawImage(shadingBuffer, 0, 0, 20, 20);
	if (revertSkin) {
		finalCtx.save();
		finalCtx.scale(-1, 1);
		finalCtx.drawImage(
			skinCanvas,
			addX + skinCtx.canvas.width * -1,
			addY,
			skinCtx.canvas.width,
			skinCtx.canvas.height
		);
		finalCtx.restore();
	} else {
		finalCtx.drawImage(skinCanvas, addX, addY, 300, 300);
	}
	if (typeof frameRendered != "undefined") {
		let copy = document.createElement("canvas");
		copy.width = frameCanvas.width;
		copy.height = frameCanvas.height;
		let copyContext = copy.getContext("2d");
		copyContext.drawImage(
			finalCanvas,
			frameRendered[0],
			frameRendered[1],
			300,
			300
		);
		copyContext.drawImage(frameCanvas, 0, 0);

		finalCanvas.width = frameCanvas.width;
		finalCanvas.height = frameCanvas.height;
		let ctx = finalCanvas.getContext("2d");
		ctx.drawImage(copy, 0, 0);
		copy = null;
		finalCanvas.style.border = "none";
	}

	//console.log(`Username: ${username}\nRevert skin: ${revertSkin}\nShadow: ${shadow}\nTransparent background: ${transparentBackground}\nIn cache: ${inCache}`);
}
function loadFrames() {
	let frameDiv = document.getElementById("frame-picker");
	for (let frameIdentifier of Object.keys(availableFrames)) {
		let frameData = availableFrames[frameIdentifier];
		let element = document.createElement("div");
		element.classList.add("render-frame-card");
		element.id = `frame-${frameIdentifier}`;
		element.style.margin = "2px";
		element.dataset.frameUrl = frameData.image;
		element.dataset.frameName = frameData.name;
		element.innerHTML = `
              <div style="display:inline-block;min-width:fit-content;margin-top:2px;font-size:15px;font-weight:bold;" class="render-label">${frameData.name}</div>
              <img style="image-rendering: pixelated" src="${frameData.image}" alt="${frameData.name}">`;
		element.onclick = function () {
			selectFrame(frameIdentifier);
		};
		frameDiv.appendChild(element);
	}
}
let smoothImage = undefined;
async function selectFrame(frameIdentifier) {
	let frameData = availableFrames[frameIdentifier];
	if (typeof frameData == "undefined") {
		frameRendered = undefined;
		smoothImage = undefined;
		updateSkin();
		return;
	}
	smoothImage = frameIdentifier;
	await renderFrame();
	updateSkin();
}

async function renderFrame() {
	if (typeof smoothImage == "undefined") {
		frameRendered = undefined;
		return;
	}
	let frameData = availableFrames[smoothImage];
	if (!frameData) {
		frameRendered = undefined;
		smoothImage = undefined;
		return;
	}
	let realAllowedWidth;
	if (typeof frameData.start == "number") {
		realAllowedWidth = frameData.end - frameData.start;
	} else {
		realAllowedWidth = frameData.end - frameData.start[0];
	}
	let frameImage = await loadImage(frameData.image);
	let proportionValue = 300 / realAllowedWidth;
	let newFramWidth = proportionValue * frameImage.width;
	frameCanvas.width = Math.floor(newFramWidth);
	frameCanvas.height = Math.floor(proportionValue * frameImage.height);
	let frameCtx = frameCanvas.getContext("2d");
	let previousWebkitImageSmoothingEnabled =
		frameCtx.webkitImageSmoothingEnabled;
	let previousMozImageSmoothingEnabled = frameCtx.mozImageSmoothingEnabled;
	let previousImageSmoothingEnabled = frameCtx.imageSmoothingEnabled;
	frameCtx.webkitImageSmoothingEnabled = false;
	frameCtx.mozImageSmoothingEnabled = false;
	frameCtx.imageSmoothingEnabled = false;
	frameCtx.clearRect(0, 0, frameCanvas.width, frameCanvas.height);
	frameCtx.drawImage(frameImage, 0, 0, frameCanvas.width, frameCanvas.height);
	let startX = Math.floor(frameData.start * proportionValue);
	let startY = Math.floor(frameData.start * proportionValue);
	if (typeof frameData.start == "number") {
		startX = Math.floor(frameData.start * proportionValue);
		startY = Math.floor(frameData.start * proportionValue);
	} else {
		startX = Math.floor(frameData.start[0] * proportionValue);
		startY = Math.floor(frameData.start[1] * proportionValue);
	}
	//console.log(`Proportion value: ${proportionValue}`)
	//console.log(`Start X & Y: ${start}`)
	frameCtx.webkitImageSmoothingEnabled = previousWebkitImageSmoothingEnabled;
	frameCtx.mozImageSmoothingEnabled = previousMozImageSmoothingEnabled;
	frameCtx.imageSmoothingEnabled = previousImageSmoothingEnabled;
	frameRendered = [startX, startY];
}
const usernameInputCooldown = document.getElementById("inputTextCooldown");
let blockInterval;
function blockUsername(seconds = 3) {
	if (blockInterval) clearInterval(blockInterval);
	usernameInputDiv.style.display = "none";
	usernameInputCooldown.style.display = "";
	let i = Math.max(3, seconds);
	usernameInputCooldown.value = `${i} seconds left..`;
	blockInterval = setInterval(() => {
		i--;
		usernameInputCooldown.value = `${i} seconds left..`;
		if (i <= 0) {
			usernameInputCooldown.style.display = "none";
			usernameInputDiv.style.display = "";
			clearInterval(blockInterval);
			blockInterval = undefined;
			return;
		}
	}, 1000);
}

const defaultColors = [];
let failedBuffer;
let backdropBuffer;
let shadingBuffer;
const backgroundCanvas = document.getElementById("background-canvas");
const skinCanvas = document.getElementById("skin-canvas");
const siteCanvas = document.getElementById("final-canvas");
const frameCanvas = document.getElementById("frame-canvas");

async function addListeners() {
	failedBuffer = await loadImage("images/notFound.png");
	backdropBuffer = await loadImage("images/backdropshading.png");
	shadingBuffer = await loadImage("images/20x20pshading.png");
	backgroundCanvas.getContext("2d").scale(15, 15);
	skinCanvas.getContext("2d").scale(15, 15);

	usernameInput.addEventListener("keyup", function (e) {
		if (e.key === "Enter") {
			processUsername();
		}
	});
	processUsername("no-cooldown");

	for (let i = 0; i < maxColorsAmount; i++) {
		if (defaultColors.length < maxColorsAmount) {
			let newColor = getRandomHexColor();
			//console.log(`Random color: ${newColor}${newColor.length != 7?` | CAUTION!`:``}`),
			defaultColors.push(newColor);
		}
		let colorsDiv = document.getElementById("colors-div");
		//console.log(`Creating color picker #${i}`);
		let p = document.createElement("input");
		p.type = "color";
		p.id = `color-picker-${i}`;
		p.index = i;
		p.value = defaultColors[i];
		p.addEventListener("change", function () {
			const color = this.value;
			//console.log(`Color picked: ${color} | ID: ${this.id} | Index: ${this.index}`);
			defaultColors[this.index] = color;
			updateSkin(true);
		});
		if (i != 0) {
			let s = document.createElement("span");
			s.innerText = " ";
			colorsDiv.appendChild(s);
		}
		colorsDiv.appendChild(p);
		//console.log(`Creating color picker #${i}! display="${p.style.display}"`)
	}
	removeColor();
}
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.toUpperCase()
		.padStart(6, "0")}`;
}

// Called in index.html
function uploadCustomSkinTexture() {
	// Create a new input element
	const uploadInput = document.createElement("input");
	uploadInput.type = "file";

	// Add event listener to handle file selection
	uploadInput.addEventListener("change", function (event) {
		const file = event.target.files[0];
		// Handle the file upload or further processing here

		// Create a FileReader object
		const reader = new FileReader();

		// Set up a load event listener on the FileReader
		reader.addEventListener("load", function () {
			// Update the image source with the uploaded image
			var img = new Image();
			img.src = reader.result;
			//console.log(`Processing custom image: ${file.name} | ${img.width}px x ${img.height}px`);
			img.onload = function () {
				if (img.width !== 64) {
					alertError(
						`<b>Invalid skin texture!</b><br><span style="font-size: small;">Skin must be 64px width!</span>`
					);
					return;
				}
				if (![64, 32].includes(img.height)) {
					alertError(
						`<b>Invalid skin texture!</b><br><span style="font-size: small;">Skin must be 64px or 32px width!</span>`
					);
					return;
				}
				loadedSkinBuffer = img;
				//console.log(`Uploaded custom image: ${file.name} | ${img.width}px x ${img.height}px`);
				updateSkin(true);
			};
		});

		// Read the uploaded file as a data URL
		reader.readAsDataURL(file);
	});

	// Append the input element to the image container
	document.body.appendChild(uploadInput);

	// Trigger a click event on the input element
	uploadInput.click();

	document.body.removeChild(uploadInput);
}
let errorTimeout = undefined;
function alertError(text = "Empty error.") {
	//console.log(`Alerting: ${text}`)
	if (errorTimeout) {
		clearTimeout(errorTimeout);
		var sb = document.getElementById("snackbar-error");
		sb.className = sb.className.replace("show", "");
	}
	var sb = document.getElementById("snackbar-error");
	sb.innerHTML = text;
	//this is where the class name will be added & removed to activate the css
	sb.className = "show";

	errorTimeout = setTimeout(() => {
		sb.className = sb.className.replace("show", "");
	}, 3000);
}
function uploadCustomBackground(event) {
	//console.log(event);
	//let imageContainer = document.getElementById("motd-icon");
	// Create a new input element
	const uploadInput = document.createElement("input");
	uploadInput.type = "file";

	// Add event listener to handle file selection
	uploadInput.addEventListener("change", function (event) {
		const file = event.target.files[0];
		// Handle the file upload or further processing here

		// Create a FileReader object
		const reader = new FileReader();
		let backgroundCtx = backgroundCanvas.getContext("2d");
		backgroundCtx.clearRect(
			0,
			0,
			backgroundCtx.canvas.width,
			backgroundCtx.canvas.height
		);

		// Set up a load event listener on the FileReader
		reader.addEventListener("load", function () {
			backgroundType = 1;

			let customGradientsOpened = document.getElementById(
				"button-toggle-custom-gradient"
			);
			if (customGradientsOpened.checked) {
				let customGradientBox = document.getElementById(
					"custom-gradient-box"
				);
				customGradientBox.classList.remove("expanded");
				customGradientsOpened.checked = false;
			}

			// Update the image source with the uploaded image
			var img = new Image();
			img.src = reader.result;
			img.onload = function () {
				backgroundCtx.save();
				//backgroundCtx.scale(1,1);
				backgroundCtx.drawImage(
					img,
					0,
					0,
					img.width,
					img.height,
					0,
					0,
					20,
					20
				);
				backgroundCtx.restore();
				//console.log(`Uploaded custom image: ${file.name}`,img.width,img.height);
				updateSkin(true);
			};
		});

		// Read the uploaded file as a data URL
		reader.readAsDataURL(file);
	});

	// Append the input element to the image container
	document.body.appendChild(uploadInput);

	// Trigger a click event on the input element
	uploadInput.click();

	document.body.removeChild(uploadInput);
}
if (history.scrollRestoration) {
	history.scrollRestoration = "manual";
} else {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
}
toggleDarkmode();
addListeners();

async function loadImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "Anonymous";
		img.src = url;
		img.onload = () => {
			resolve(img);
		};
		img.onerror = (e) => {
			reject(e);
		};
	});
}
async function drawFailed() {
	const canvas = document.getElementById("final-canvas");
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 300, 300);
	ctx.drawImage(backdropBuffer, 0, 0, 20, 20);
	ctx.resetTransform();
	ctx.drawImage(failedBuffer, 0, 0, 300, 300);
	ctx.scale(16, 16);
	//ctx.drawImage(shading, 0, 0, 20, 20)
}

document.addEventListener("DOMContentLoaded", () => {
	loadFrames();

	const urlParams = new URLSearchParams(window.location.search);
	let username = urlParams.get("username");
	if (username) {
		setTimeout(() => {
			usernameInput.value = username;
			processUsername();
		}, 500);
	}
});
