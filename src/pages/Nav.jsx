import React, { useState } from 'react';

function NavBar() {
  const [spotlightVisible, setSpotlightVisible] = useState(false);

  const toggleSpotlight = () => {
    setSpotlightVisible(!spotlightVisible);
  };

  return (
    <div id="topNav">
  <div id="leftOptions">
    <div id="appleLogo" class="option fa fa-apple">
      <div id="appleLogoMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="sub-menu-line">About This Mac</li>
          <li>System Preferences...</li>
          <li class="sub-menu-line">App Store...</li>
          <li class="sub-menu-line">Recent Items</li>
          <li class="sub-menu-line">Force Quit...</li>
          <li>Sleep</li>
          <li>Restart...</li>
          <li class="sub-menu-line">Shut Down...</li>
          <li>Log Out Ricardo Mercado...</li>
        </ul>
      </div>
    </div>
    <div id="finderOption" class="option">
      Finder
      <div id="finderOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="sub-menu-line">About Finder</li>
          <li class="sub-menu-line">Preferences...</li>
          <li class="sub-menu-line disabled">Empty Trash...</li>
          <li class="sub-menu-line">Services</li>
          <li>Hide Finder</li>
          <li>Hide Others</li>
          <li class="disabled">Show All</li>
        </ul>
      </div>
    </div>
    <div id="fileOption" class="option">
      File
      <div id="fileOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li>New Finder Window</li>
          <li>New Folder</li>
          <li>New Folder with Selection</li>
          <li>New Smart Folder</li>
          <li>New Tab</li>
          <li>Open</li>
          <li>Open With...</li>
          <li>Print</li>
          <li class="sub-menu-line disabled">Close Window</li>
          <li>Get Info</li>
          <li class="sub-menu-line">Rename</li>
          <li class="sub-menu-line">Compress</li>
          <li>Duplicate</li>
          <li>Make Alias</li>
          <li>Quick Look</li>
          <li class="disabled">Show Original</li>
          <li class="sub-menu-line">Add to Sidebar</li>
          <li>Move to Trash</li>
          <li class="sub-menu-line disabled">Eject</li>
          <li class="sub-menu-line">Find</li>
          <li>Tags...</li>
          <li id="finderTags"></li>
        </ul>
      </div>
    </div>
    <div id="editOption" class="option">
      Edit
      <div id="editOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="disabled">Undo</li>
          <li class="sub-menu-line disabled">Redo</li>
          <li class="disabled">Cut</li>
          <li class="disabled">Copy</li>
          <li class="disabled">Paste</li>
          <li class="sub-menu-line">Select All</li>
          <li class="sub-menu-line">Show Clipboard</li>
          <li class="disabled">Start Dictation</li>
          <li class="sub-menu-line disabled">Close Window</li>
          <li>Emoji & Symbols</li>
        </ul>
      </div>
    </div>
    <div id="viewOption" class="option">
      View
      <div id="viewOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="disabled">as Icons</li>
          <li class="disabled">as List</li>
          <li class="disabled">as Columns</li>
          <li class="sub-menu-list disabled">as Cover Flow</li>
          <li>Clean Up</li>
          <li>Clean Up By</li>
          <li class="sub-menu-line">Sort By</li>
          <li class="disabled">Show Tab Bar</li>
          <li class="disabled">Show Path Bar</li>
          <li class="disabled">Show Status Bar</li>
          <li class="disabled">Hide Sidebar</li>
          <li class="sub-menu-line disabled">Show Preview</li>
          <li class="disabled">Hide Toolbar</li>
          <li class="sub-menu-line disabled">Customize Toolbar...</li>
          <li class="sub-menu-line">Show View Options</li>
          <li class="disabled">Enter Full Screen</li>
        </ul>
      </div>
    </div>
    <div id="goOption" class="option">
      Go
      <div id="goOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="disabled">Back</li>
          <li class="disabled">Forward</li>
          <li class="sub-menu-list">Enclosing Folder</li>
          <li><i class="fa fa-file-text"></i> All My Files</li>
          <li><i class="fa fa-files-o"></i> Documents</li>
          <li><i class="fa fa-desktop"></i> Desktop</li>
          <li><i class="fa fa-arrow-circle-down"></i> Downloads</li>
          <li><i class="fa fa-home"></i> Home</li>
          <li><i class="fa fa-laptop"></i> Computer</li>
          <li><i class="fa fa-bullseye"></i> AirDrop</li>
          <li><i class="fa fa-globe"></i> Network</li>
          <li><i class="fa fa-cloud"></i> iCloud Drive</li>
          <li><i class="fa fa-rocket"></i> Applications</li>
          <li class="sub-menu-line"><i class="fa fa-wrench"></i> Utilities</li>
          <li class="sub-menu-line">Recent Folders</li>
          <li>Go to Folder...</li>
          <li>Connect to Server...</li>
        </ul>
      </div>
    </div>
    <div id="windowOption" class="option">
      Window
      <div id="windowOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="disabled">Minimize</li>
          <li class="disabled">Zoom</li>
          <li class="sub-menu-list">Cycle Through Windows</li>
          <li class="disabled">Show Previous Tab</li>
          <li class="disabled">Show Next Tab</li>
          <li class="disabled">Move Tab to New Window</li>
          <li class="sub-menu-line disabled">Merge All Windows</li>
          <li class="disabled">Bring All To Front</li>
        </ul>
      </div>
    </div>
    <div id="helpOption" class="option">
      Help
      <div id="helpOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="search">
            Search <input id="helpSearchInput" type="text"></input>
          </li>
          <li class="sub-menu-list">Mac Help</li>
          <li>What's New in macOS</li>
          <li>New to Mac</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="rightOptions">
    <div id="volumeOption" class="option fa fa-volume-up">
      <div id="volumeOptionMenu" class="sub-menu">
        <div id="volumeSlider">
          <input type="range" orient="vertical"/>
        </div>
      </div>
    </div>
    <div id="wifiOption" class="option fa fa-wifi">
      <div id="wifiOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="disabled">Wi-Fi: Looking for Networks...</li>
          <li class="sub-menu-line">Turn Wi-Fi Off</li>
          <li class="selected access-point">
            <i class="fa fa-check"></i>
            <span>FutoRickyWiFi</span>
            <div class="signal">
              <i class="fa fa-lock"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="access-point">
            <span>Get Off My LAN</span>
            <div class="signal">
              <i class="fa fa-lock"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="access-point">
            <span>PorqueFi</span>
            <div class="signal">
              <i class="fa fa-lock hidden"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="access-point">
            <span>Two Girls One Router</span>
            <div class="signal">
              <i class="fa fa-lock"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="access-point">
            <span>TellMyWiFiLoveHer</span>
            <div class="signal">
              <i class="fa fa-lock"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="access-point">
            <span>It Hurts When IP </span>
            <div class="signal">
              <i class="fa fa-lock"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="access-point">
            <span>( . )( . )</span>
            <div class="signal">
              <i class="fa fa-lock hidden"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li class="sub-menu-line access-point">
            <span>HideYoKidsHideYoWiFi</span>
            <div class="signal">
              <i class="fa fa-lock hidden"></i>
              <i class="fa fa-wifi"></i>
            </div>
          </li>
          <li>Join Other Network...</li>
          <li>Create Network...</li>
          <li>Open Network Preferences...</li>
        </ul>
      </div>
    </div>
    <div id="bluetoothOption" class="option fa fa-bluetooth-b">
      <div id="bluetoothOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="disabled">Bluetooth: On</li>
          <li class="sub-menu-line">Turn Bluetooth Off</li>
          <li class="disabled">Devices</li>
          <li class="sub-menu-line">Admin's Trackpad</li>
          <li>Send File to Device...</li>
          <li class="sub-menu-line">Browse Files on Device...</li>
          <li class="disabled">Open Bluetooth Preferences...</li>
        </ul>
      </div>
    </div>
    <div id="batteryOption" class="option fa fa-battery-three-quarters">
      <div id="batteryOptionMenu" class="sub-menu">
        <ul class="sub-menu-list">
          <li class="sub-menu-line">Power Source: Battery</li>
          <li class="disabled">Using significant Energy</li>
          <li class="disabled">Devices</li>
          <li class="sub-menu-line">Admin's Trackpad</li>
          <li>Show Battery Percentage</li>
          <li>Open Energy Save Preferences...</li>
        </ul>
      </div>
    </div>
    <div id="timeOption" class="option"></div>
    <div id="searchOption" class="option fa fa-search" onclick="toggleSpotlight()"></div>
    <div id="sideMenuOption" class="option fa fa-list-ul"></div>
  </div>
</div>
  );
}

export default NavBar;
