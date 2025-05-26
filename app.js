const mobiles = {
  iphone: {
  iphone7: {
    processor: "Snapdragon 8 Gen 2",
    memory: { ram: 12, storage: 512 },
    camera: {
      rear: {
        main: 200, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10,
      },
      front: 10,
    },
    brand: "iphone",
    battery: 5000,
    operatingSystem: "iOS 13",
    specialFeatures: ["Face ID", "Water Resistance"],
  },
  iphone8: {
    processor: "Snapdragon 12 Gen 5",
    memory: { ram: 8, storage: 256 },
    camera: {
      rear: {
        main: 180, ultrawide: 15, telephoto: 10, telephotoPeriscope: 20,
      },
      front: 12,
    },
    brand: "iphone",
    battery: 8000,
    operatingSystem: "iOS 14",
    specialFeatures: ["Touch ID", "Retina Display"],
  },
  iphoneX: {
    processor: "Apple A11 Bionic",
    memory: { ram: 3, storage: 256 },
    camera: {
      rear: {
        main: 12, ultrawide: 0, telephoto: 12, telephotoPeriscope: 0,
      },
      front: 7,
    },
    brand: "iphone",
    battery: 2716,
    operatingSystem: "iOS 11",
    specialFeatures: ["Face ID", "OLED Display"],
  },
  iphone11: {
    processor: "Apple A13 Bionic",
    memory: { ram: 4, storage: 128 },
    camera: {
      rear: {
        main: 12, ultrawide: 12, telephoto: 0, telephotoPeriscope: 0,
      },
      front: 12,
    },
    brand: "iphone",
    battery: 3110,
    operatingSystem: "iOS 13",
    specialFeatures: ["Night Mode", "Dolby Atmos"],
  },
  iphone13ProMax: {
    processor: "Apple A15 Bionic",
    memory: { ram: 6, storage: 1024 },
    camera: {
      rear: {
        main: 12, ultrawide: 12, telephoto: 12, telephotoPeriscope: 0,
      },
      front: 12,
    },
    brand: "iphone",
    battery: 4352,
    operatingSystem: "iOS 15",
    specialFeatures: ["ProMotion Display", "Cinematic Mode"],
  },
},
  samsung: {
    galaxyS21: {
      processor: "Exynos 2100",
      memory: { ram: 8, storage: 256 },
      camera: {
        rear: {
          main: 108, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10,
        },
        front: 40,
      },
      brand: "samsung",
      battery: 5000,
      operatingSystem: "Android 12",
      specialFeatures: ["120Hz Display", "Wireless Charging"],
    },
    galaxyNote20: {
      processor: "Snapdragon 865+",
      memory: { ram: 12, storage: 512 },
      camera: {
        rear: {
          main: 108, ultrawide: 12, telephoto: 12, telephotoPeriscope: 50,
        },
        front: 10,
      },
      brand: "samsung",
      battery: 4500,
      operatingSystem: "Android 11",
      specialFeatures: ["S Pen", "Dex Mode"],
    },
    galaxyA73: {
      processor: "Snapdragon 778G",
      memory: { ram: 8, storage: 128 },
      camera: {
        rear: {
          main: 108, ultrawide: 8, telephoto: 5, telephotoPeriscope: 0,
        },
        front: 32,
      },
      brand: "samsung",
      battery: 5000,
      operatingSystem: "Android 13",
      specialFeatures: ["Super AMOLED+", "Water Resistance"],
    },
  },
  vivo: {
  y21: {
    processor: "MediaTek Helio P35",
    memory: { ram: 4, storage: 64 },
    camera: {
      rear: { main: 13, ultrawide: 2, telephoto: 0, telephotoPeriscope: 0 },
      front: 8,
    },
    brand: "vivo",
    battery: 5000,
    operatingSystem: "Android 11",
    specialFeatures: ["Side fingerprint", "Face Unlock"],
  },
  y33s: {
    processor: "MediaTek Helio G80",
    memory: { ram: 8, storage: 128 },
    camera: {
      rear: { main: 50, ultrawide: 2, telephoto: 0, telephotoPeriscope: 0 },
      front: 16,
    },
    brand: "vivo",
    battery: 5000,
    operatingSystem: "Android 11",
    specialFeatures: ["AI Triple Camera", "Ultra Game Mode"],
  },
  v25: {
    processor: "MediaTek Dimensity 900",
    memory: { ram: 8, storage: 128 },
    camera: {
      rear: { main: 64, ultrawide: 8, telephoto: 0, telephotoPeriscope: 0 },
      front: 50,
    },
    brand: "vivo",
    battery: 4500,
    operatingSystem: "Android 12",
    specialFeatures: ["Color-changing glass", "44W FlashCharge"],
  },
  x70: {
    processor: "Snapdragon 870",
    memory: { ram: 12, storage: 256 },
    camera: {
      rear: { main: 48, ultrawide: 12, telephoto: 12, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "vivo",
    battery: 4400,
    operatingSystem: "Android 11",
    specialFeatures: ["ZEISS optics", "Gimbal stabilization"],
  },
  x100: {
    processor: "Snapdragon 8 Gen 3",
    memory: { ram: 16, storage: 512 },
    camera: {
      rear: { main: 50, ultrawide: 48, telephoto: 50, telephotoPeriscope: 50 },
      front: 32,
    },
    brand: "vivo",
    battery: 5000,
    operatingSystem: "Android 14",
    specialFeatures: ["ZEISS T* coating", "V3 chip"],
  },
},
realme: {
  realmeNarzo50: {
    processor: "MediaTek Helio G96",
    memory: { ram: 6, storage: 128 },
    camera: {
      rear: { main: 50, ultrawide: 2, telephoto: 0, telephotoPeriscope: 0 },
      front: 16,
    },
    brand: "realme",
    battery: 5000,
    operatingSystem: "Android 11",
    specialFeatures: ["Dynamic RAM Expansion", "90Hz Display"],
  },
  realmeGTNeo3: {
    processor: "MediaTek Dimensity 8100",
    memory: { ram: 8, storage: 256 },
    camera: {
      rear: { main: 50, ultrawide: 8, telephoto: 2, telephotoPeriscope: 0 },
      front: 16,
    },
    brand: "realme",
    battery: 5000,
    operatingSystem: "Android 12",
    specialFeatures: ["150W Fast Charging", "Stainless Steel Vapor Cooling"],
  },
  realme11ProPlus: {
    processor: "MediaTek Dimensity 7050",
    memory: { ram: 12, storage: 512 },
    camera: {
      rear: { main: 200, ultrawide: 8, telephoto: 0, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "realme",
    battery: 5000,
    operatingSystem: "Android 13",
    specialFeatures: ["Curved AMOLED", "SuperZoom"],
  }
},
xiomi: {
  redmiA2: {
    processor: "Snapdragon 8 Gen 1",
    memory: { ram: 8, storage: 256 },
    camera: {
      rear: { main: 50, ultrawide: 50, telephoto: 48, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "xiomi",
    battery: 4600,
    operatingSystem: "Android 12",
    specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
  },
  redmi10: {
    processor: "Snapdragon 7 Gen 5",
    memory: { ram: 12, storage: 256 },
    camera: {
      rear: { main: 50, ultrawide: 50, telephoto: 48, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "xiomi",
    battery: 5000,
    operatingSystem: "Android 11",
    specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
  },
  redmi11: {
    processor: "Snapdragon 8 Gen 4",
    memory: { ram: 12, storage: 512 },
    camera: {
      rear: { main: 50, ultrawide: 50, telephoto: 48, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "xiomi",
    battery: 8000,
    operatingSystem: "Android 12",
    specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
  },
  redmi12: {
    processor: "Snapdragon 12 Gen 1",
    memory: { ram: 12, storage: 512 },
    camera: {
      rear: { main: 50, ultrawide: 50, telephoto: 48, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "xiomi",
    battery: 8000,
    operatingSystem: "Android 13",
    specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
  },
  redmi13C: {
    processor: "Snapdragon 9 Gen 5",
    memory: { ram: 12, storage: 512 },
    camera: {
      rear: { main: 50, ultrawide: 50, telephoto: 48, telephotoPeriscope: 0 },
      front: 32,
    },
    brand: "xiomi",
    battery: 10000,
    operatingSystem: "Android 13",
    specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
  },
}
};

    // brand dropdown on load
    const brandSelect = document.getElementById("brandSelect");
    const modelSelect = document.getElementById("modelSelect");
    const specsBox = document.getElementById("specsBox");

    const brandKeys = Object.keys(mobiles);
    for (let i = 0; i < brandKeys.length; i++) {
      let option = document.createElement("option");
      option.value = brandKeys[i];
      option.text = brandKeys[i].toUpperCase();
      brandSelect.appendChild(option);
    }

    function loadModels() {
      modelSelect.innerHTML = `<option value="">--Select Model--</option>`;
      specsBox.style.display = "none";
      let selectedBrand = brandSelect.value;

      if (selectedBrand && mobiles[selectedBrand]) {
        const modelKeys = Object.keys(mobiles[selectedBrand]);
        for (let i = 0; i < modelKeys.length; i++) {
          let option = document.createElement("option");
          option.value = modelKeys[i];
          option.text = modelKeys[i];
          modelSelect.appendChild(option);
        }
      }
    }

    function showSpecs() {
      let brand = brandSelect.value;
      let model = modelSelect.value;

      if (brand && model && mobiles[brand][model]) {
        const data = mobiles[brand][model];
        specsBox.style.display = "block";
        specsBox.innerHTML = `
          <h2>${brand.toUpperCase()} - ${model}</h2>
          <ul>
            <li><strong>Processor:</strong> ${data.processor}</li>
            <li><strong>RAM:</strong> ${data.memory.ram || data.memory.rm} GB</li>
            <li><strong>Storage:</strong> ${data.memory.storage} GB</li>
            <li><strong>Rear Camera:</strong> Main: ${data.camera.rear.main}MP, Ultrawide: ${data.camera.rear.ultrawide}MP, Telephoto: ${data.camera.rear.telephoto}MP, Periscope: ${data.camera.rear.telephotoPeriscope || data.camera.rear["telep. hotoPeriscpe"]}MP</li>
            <li><strong>Front Camera:</strong> ${data.camera.front}MP</li>
            <li><strong>Battery:</strong> ${data.battery} mAh</li>
            <li><strong>OS:</strong> ${data.operatingSystem}</li>
            <li><strong>Special Features:</strong> ${data.specialFeatures.join(", ")}</li>
          </ul>
        `;
      }
    };
  
    