

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  /** ------------- TryHackMe Linux Rooms ------------- **/
  linuxDocs: [
    'tryhackme-introduction',
    {
      type: 'category',
      label: 'Virtual Machines [Linux]',
      link: {
        type: 'generated-index',
        title: 'TryHackMe Linux',
        description:
          "Linux Machines from TryHackMe.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'Agent SUDO',
          items: [
            'linux/agentsudo/agent-enumeration', 'linux/agentsudo/agent-exploitation',// [1] Sidebar Element Before [2] Sidebar Dropdown
          ],
        },
        {
          type: 'category',
          label: 'Basic Pentesting',
          items: [
            'linux/basicpentesting/basic-enumeration', 'linux/basicpentesting/basic-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Bounty Hacker',
          items: [
            'linux/bountyhacker/bountyhacker-enumeration', 'linux/bountyhacker/bountyhacker-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Cyborg',
          items: [
            'linux/cyborg/cyborg-enumeration', 'linux/cyborg/cyborg-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Daily Bugle',
          items: [
            'linux/dailybugle/dailybugle-enumeration', 'linux/dailybugle/dailybugle-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Game Zone',
          items: [
            'linux/gamezone/gz-enumeration', 'linux/gamezone/gz-exploitation-one', 'linux/gamezone/gz-exploitation-two',
          ],
        },
        {
          type: 'category',
          label: 'Ignite',
          items: [
            'linux/ignite/ignite-enumeration', 'linux/ignite/ignite-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Internal',
          items: [
            'linux/internal/internal-enumeration', 'linux/internal/internal-exploitation', 'linux/internal/internal-jenkins',
          ],
        },
        {
          type: 'category',
          label: 'Kenobi',
          items: [
            'linux/kenobi/kenobi-enumeration', 'linux/kenobi/kenobi-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Lazy Admin',
          items: [
            'linux/lazyadmin/lazyadmin-enumeration', 'linux/lazyadmin/lazyadmin-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Lian Yu',
          items: [
            'linux/lianyu/lianyu-enumeration', 'linux/lianyu/lianyu-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Pickle Rick',
          items: [
            'linux/picklerick/picklerick-enumeration', 'linux/picklerick/picklerick-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Res',
          items: [
            'linux/res/res-enumeration', 'linux/res/res-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'RootMe',
          items: [
            'linux/rootme/rootme-enumeration', 'linux/rootme/rootme-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Simple CTF',
          items: [
            'linux/simplectf/simplectf-enumeration', 'linux/simplectf/simplectf-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Skynet',
          items: [
            'linux/skynet/skynet-enumeration', 'linux/skynet/skynet-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Source VM',
          items: [
            'linux/sourcevm/sourcevm-enumeration', 'linux/sourcevm/sourcevm-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Startup',
          items: [
            'linux/startup/startup-enumeration', 'linux/startup/startup-forensics', 'linux/startup/startup-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'TomGhost',
          items: [
            'linux/tomghost/tomghost-enumeration', 'linux/tomghost/tomghost-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Vulnversity',
          items: [
            'linux/vulnversity/vulnversity-enumeration', 'linux/vulnversity/vulnversity-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Wgel',
          items: [
            'linux/wgel/wgel-enumeration', 'linux/wgel/wgel-exploitation',
          ],
        },
        
      ],
  
    },

    /** ------------- TryHackMe Windows Rooms ------------- **/
    {
      type: 'category',
      label: 'Virtual Machines [Windows]',
      link: {
        type: 'generated-index',
        title: 'TryHackMe Windows',
        description:
          "Windows Machines from TryHackMe.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'Alfred',
          items: [
            'windows/alfred/alfred-enumeration', 'windows/alfred/alfred-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Blaster',
          items: [
            'windows/blaster/blaster-enumeration', 'windows/blaster/blaster-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Blue',
          items: [
            'windows/blue/blue-enumeration', 'windows/blue/blue-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'HackPark',
          items: [
            'windows/hackpark/hackpark-enumeration', 'windows/hackpark/hackpark-blogengine', 'windows/hackpark/hackpark-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Ice',
          items: [
            'windows/ice/ice-enumeration', 'windows/ice/ice-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Relevant',
          items: [
            'windows/relevant/relevant-enumeration', 'windows/relevant/relevant-exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Steel Mountain',
          items: [
            'windows/steelmountain/steelmountain-enumeration', 'windows/steelmountain/steelmountain-exploitation', 'windows/steelmountain/steelmountain-manual',
          ],
        },
        
      ],
  
    },

    /** ------------- TryHackMe Overpass Series  ------------- **/
    {
      type: 'category',
      label: 'Overpass Series',
      link: {
        type: 'generated-index',
        title: 'TryHackMe Overpass Series',
        description:
          "Overpass Series Machines from TryHackMe.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'Overpass',
          items: [
            'linux/overpass/overpass-enumeration', 'linux/overpass/overpass-exploitation', 
          ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Overpass - Hacked',
            items: [
              'linux/overpass-hacked/ohacked-enumeration', 'linux/overpass-hacked/ohacked-forensics', 'linux/overpass-hacked/ohacked-exploitation', 
            ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Overpass - Hosting',
            items: [
              'linux/overpass-hosting/ohosting-enumeration', 'linux/overpass-hosting/ohosting-tunneling', 'linux/overpass-hosting/ohosting-exploitation', 
            ],
        },
        
      ],
  
    },
  ],


  /** ------------- Web Vulnerabilities (OWASP etc.) ------------- **/
  owaspDocs: [
    'introduction',
    {
      type: 'category',
      label: 'Web Vulnerabilities',
      link: {
        type: 'generated-index',
        title: 'Web Vulnerabilities',
        description:
          "Web Based Vulnerabilities.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Start
          
          type: 'category',
          label: 'Injection',
          items: [
            'injection/command-injection',
            /*{
              type: 'category',
              label: 'Command Injection',
              items: [
                'injection/ci-overview', 'injection/command-injection',
              ],
            },*/
            {
              type: 'category',
              label: 'LFI',
              items: [
                'injection/localfile-inclusion', 'injection/remotefile-inclusion',
              ],
            },
            {
              type: 'category',
              label: 'SQLi',
              items: [
                'injection/errorbased-sqli', 'injection/blindsqli-authbypass', 'injection/blindsqli-timebased',
              ],
            },
            {
              type: 'category',
              label: 'SSTI',
              items: [
                'injection/ssti',
              ],
            },
          ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Broken Authentication',
            items: [
              'brokenauth/registration',
              /*{
                type: 'category',
                label: 'General',
                items: [
                  'brokenauth/broken-authgeneral', 'brokenauth/registration',
                ],
              },*/
              /*{
                type: 'category',
                label: 'Authentication Bypass',
                items: [
                  'brokenauth/user-enumeration', 'brokenauth/logic-flaw', 'brokenauth/bruteforce',
                ],
              },*/
              {
                type: 'category',
                label: 'JWT',
                items: [
                  'brokenauth/jwt-overview', 'brokenauth/jwt-exploitation', 'brokenauth/jwt-none',
                ],
              },
            ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'XML External Entity',
            items: [
              {
                type: 'category',
                label: 'General',
                items: [
                  'xmlexternalentity/xxe', 'xmlexternalentity/xxe-exploitation',
                ],
              },
              {
                type: 'category',
                label: 'SSRF',
                items: [
                  'xmlexternalentity/ssrf-overview', 'xmlexternalentity/ssrf',
                ],
              },
            ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'XSS - Cross-Site Scripting',
            items: [
              {
                type: 'category',
                label: 'General',
                items: [
                  'xss/xss-general', 'xss/xss-scenario', 'xss/blind-xss',
                ],
              },
              {
                type: 'category',
                label: 'IDOR',
                items: [
                  'xss/idor-overview', 'xss/idor',
                ],
              },
            ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Upload Vulnerabilities',
            items: [
              {
                type: 'category',
                label: 'General',
                items: [
                  'uploadvulnerabilities/rce-filtering', 'uploadvulnerabilities/serverside-filtering',  'uploadvulnerabilities/client-filtering',
                ],
              },
            ],
        },
      ],
  
    },

    /** ------------- Linux (Priv Escalation - Stabilisation - etc.) ------------- **/
    {
      type: 'category',
      label: 'Linux',
      link: {
        type: 'generated-index',
        title: 'Linux General',
        description:
          "Generall Stuff About Linux.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'General',
          items: [
            'other/permissions', 'other/passwd-shadow', 'other/commands',  // [1] Sidebar Element Before [2] Sidebar Dropdown
          ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Terminal - Payloads',
            items: [ 
              'other/stabilisation', 'other/web-shell',
            ],
        },
      ],
  
    },

    /** ------------- Windows (Priv Escalation - Stabilisation - etc.) ------------- **/
    {
      type: 'category',
      label: 'Windows',
      link: {
        type: 'generated-index',
        title: 'Windows General',
        description:
          "Generall Stuff About Windows.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'General',
          items: [
            'other-win/permissions', 'other-win/commands', 'other-win/tools', 'other-win/harvesting', // [1] Sidebar Element Before [2] Sidebar Dropdown
          ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Privilege Escalation',
            items: [ 
              {
                // [1] Sidebar Starts
                  type: 'category',
                  label: 'Privileges',
                  items: [ 
                    'priv-escalation/sebackup-serestore', 'priv-escalation/setakeownership', 'priv-escalation/se-token',
                  ],
              },
              {
                // [1] Sidebar Starts
                  type: 'category',
                  label: 'Services',
                  items: [ 
                    'priv-escalation/insecure-permissions', 'priv-escalation/scheduled-tasks', 'priv-escalation/unquoted-service', 'priv-escalation/insecure-service', 'priv-escalation/alwaysinstallelevated',
                  ],
              },
            ],
            
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Terminal - Payloads',
            items: [ 
              'other-win/shell-win',
            ],
            
        },
      ],
  
    },

    /** ------------- Recon ------------- **/
    {
      type: 'category',
      label: 'Recon',
      link: {
        type: 'generated-index',
        title: 'Recon',
        description:
          "Passive - Active Recon",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'Content Discovery',
          items: [
            'recon/osint', 'recon/manual',
          ],
        },
        'recon/tools',
      ],
  
    },

    /** ------------- Tools (General Linux-Windows) ------------- **/
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index',
        title: 'Tools',
        description:
          "General Information About Tools.",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        'tools/hydra',
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'NMAP',
          items: [
            'tools/discovery', 'tools/basic', 'tools/advanced-one', 'tools/nse',
          ],
        },
      ],
  
    },
    'credits',
  ],
};
module.exports = sidebars;
