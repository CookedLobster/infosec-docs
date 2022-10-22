/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  /** ------------- TryHackMe Linux Rooms ------------- **/
  linuxDocs: [
    "tryhackme-introduction",
    {
      type: "category",
      label: "Virtual Machines [Linux]",
      link: {
        type: "generated-index",
        title: "TryHackMe Linux",
        description: "Linux Machines from TryHackMe.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "Agent SUDO",
          items: [
            "tryhackme/agentsudo/agent-enumeration",
            "tryhackme/agentsudo/agent-exploitation",
          ],
        },
        {
          type: "category",
          label: "Basic Pentesting",
          items: [
            "tryhackme/basicpentesting/basic-enumeration",
            "tryhackme/basicpentesting/basic-exploitation",
          ],
        },
        {
          type: "category",
          label: "Bounty Hacker",
          items: [
            "tryhackme/bountyhacker/bountyhacker-enumeration",
            "tryhackme/bountyhacker/bountyhacker-exploitation",
          ],
        },
        {
          type: "category",
          label: "Cyborg",
          items: [
            "tryhackme/cyborg/cyborg-enumeration",
            "tryhackme/cyborg/cyborg-exploitation",
          ],
        },
        {
          type: "category",
          label: "Daily Bugle",
          items: [
            "tryhackme/dailybugle/dailybugle-enumeration",
            "tryhackme/dailybugle/dailybugle-exploitation",
          ],
        },
        {
          type: "category",
          label: "Game Zone",
          items: [
            "tryhackme/gamezone/gz-enumeration",
            "tryhackme/gamezone/gz-exploitation-one",
            "tryhackme/gamezone/gz-exploitation-two",
          ],
        },
        {
          type: "category",
          label: "Ignite",
          items: [
            "tryhackme/ignite/ignite-enumeration",
            "tryhackme/ignite/ignite-exploitation",
          ],
        },
        {
          type: "category",
          label: "Internal",
          items: [
            "tryhackme/internal/internal-enumeration",
            "tryhackme/internal/internal-exploitation",
            "tryhackme/internal/internal-jenkins",
          ],
        },
        {
          type: "category",
          label: "Kenobi",
          items: [
            "tryhackme/kenobi/kenobi-enumeration",
            "tryhackme/kenobi/kenobi-exploitation",
          ],
        },
        {
          type: "category",
          label: "Lazy Admin",
          items: [
            "tryhackme/lazyadmin/lazyadmin-enumeration",
            "tryhackme/lazyadmin/lazyadmin-exploitation",
          ],
        },
        {
          type: "category",
          label: "Lian Yu",
          items: [
            "tryhackme/lianyu/lianyu-enumeration",
            "tryhackme/lianyu/lianyu-exploitation",
          ],
        },
        {
          type: "category",
          label: "Pickle Rick",
          items: [
            "tryhackme/picklerick/picklerick-enumeration",
            "tryhackme/picklerick/picklerick-exploitation",
          ],
        },
        {
          type: "category",
          label: "Res",
          items: [
            "tryhackme/res/res-enumeration",
            "tryhackme/res/res-exploitation",
          ],
        },
        {
          type: "category",
          label: "RootMe",
          items: [
            "tryhackme/rootme/rootme-enumeration",
            "tryhackme/rootme/rootme-exploitation",
          ],
        },
        {
          type: "category",
          label: "Simple CTF",
          items: [
            "tryhackme/simplectf/simplectf-enumeration",
            "tryhackme/simplectf/simplectf-exploitation",
          ],
        },
        {
          type: "category",
          label: "Skynet",
          items: [
            "tryhackme/skynet/skynet-enumeration",
            "tryhackme/skynet/skynet-exploitation",
          ],
        },
        {
          type: "category",
          label: "Source VM",
          items: [
            "tryhackme/sourcevm/sourcevm-enumeration",
            "tryhackme/sourcevm/sourcevm-exploitation",
          ],
        },
        {
          type: "category",
          label: "StartUp",
          items: [
            "tryhackme/startup/startup-enumeration",
            "tryhackme/startup/startup-forensics",
            "tryhackme/startup/startup-exploitation",
          ],
        },
        {
          type: "category",
          label: "TomGhost",
          items: [
            "tryhackme/tomghost/tomghost-enumeration",
            "tryhackme/tomghost/tomghost-exploitation",
          ],
        },
        {
          type: "category",
          label: "Vulnversity",
          items: [
            "tryhackme/vulnversity/vulnversity-enumeration",
            "tryhackme/vulnversity/vulnversity-exploitation",
          ],
        },
        {
          type: "category",
          label: "Wgel",
          items: [
            "tryhackme/wgel/wgel-enumeration",
            "tryhackme/wgel/wgel-exploitation",
          ],
        },
      ],
    },

    /** ------------- TryHackMe Windows Rooms ------------- **/
    {
      type: "category",
      label: "Virtual Machines [Windows]",
      link: {
        type: "generated-index",
        title: "TryHackMe Windows",
        description: "Windows Machines from TryHackMe.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "Alfred",
          items: [
            "tryhackme/alfred/alfred-enumeration",
            "tryhackme/alfred/alfred-exploitation",
          ],
        },
        {
          type: "category",
          label: "Blaster",
          items: [
            "tryhackme/blaster/blaster-enumeration",
            "tryhackme/blaster/blaster-exploitation",
          ],
        },
        {
          type: "category",
          label: "Blue",
          items: [
            "tryhackme/blue/blue-enumeration",
            "tryhackme/blue/blue-exploitation",
          ],
        },
        {
          type: "category",
          label: "HackPark",
          items: [
            "tryhackme/hackpark/hackpark-enumeration",
            "tryhackme/hackpark/hackpark-blogengine",
            "tryhackme/hackpark/hackpark-exploitation",
          ],
        },
        {
          type: "category",
          label: "Ice",
          items: [
            "tryhackme/ice/ice-enumeration",
            "tryhackme/ice/ice-exploitation",
          ],
        },
        {
          type: "category",
          label: "Relevant",
          items: [
            "tryhackme/relevant/relevant-enumeration",
            "tryhackme/relevant/relevant-exploitation",
          ],
        },
        {
          type: "category",
          label: "Steel Mountain",
          items: [
            "tryhackme/steelmountain/steelmountain-enumeration",
            "tryhackme/steelmountain/steelmountain-exploitation",
            "tryhackme/steelmountain/steelmountain-manual",
          ],
        },
      ],
    },

    /** ------------- TryHackMe Overpass Series  ------------- **/
    {
      type: "category",
      label: "Overpass Series",
      link: {
        type: "generated-index",
        title: "TryHackMe Overpass Series",
        description: "Overpass Series Machines from TryHackMe.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "Overpass",
          items: [
            "tryhackme/overpass/overpass-enumeration",
            "tryhackme/overpass/overpass-exploitation",
          ],
        },
        {
          type: "category",
          label: "Overpass - Hacked",
          items: [
            "tryhackme/overpass-hacked/ohacked-enumeration",
            "tryhackme/overpass-hacked/ohacked-forensics",
            "tryhackme/overpass-hacked/ohacked-exploitation",
          ],
        },
        {
          type: "category",
          label: "Overpass - Hosting",
          items: [
            "tryhackme/overpass-hosting/ohosting-enumeration",
            "tryhackme/overpass-hosting/ohosting-tunneling",
            "tryhackme/overpass-hosting/ohosting-exploitation",
          ],
        },
      ],
    },
  ],

  owaspDocs: [
    "introduction",

    /** ------------- Linux (Priv Escalation - Stabilization - etc.) ------------- **/
    {
      type: "category",
      label: "Linux",
      link: {
        type: "generated-index",
        title: "Linux General",
        description: "General Stuff About Linux.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "General",
          items: ["linux/permissions", "linux/commands"],
        },
        {
          type: "category",
          label: "Terminal - Payloads",
          items: [
            "linux/stabilization",
            "linux/lin-file-transfer",
            "linux/web-shell",
          ],
        },
      ],
    },

    /** ------------- Windows (Priv Escalation - Stabilization - etc.) ------------- **/
    {
      type: "category",
      label: "Windows",
      link: {
        type: "generated-index",
        title: "Windows General",
        description: "General Stuff About Windows.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "General",
          items: ["windows/permissions", "windows/commands"],
        },
        {
          type: "category",
          label: "Privilege Escalation",
          items: [
            {
              type: "category",
              label: "Privileges",
              items: [
                "priv-escalation/sebackup-serestore",
                "priv-escalation/setakeownership",
                "priv-escalation/se-token",
              ],
            },
            {
              type: "category",
              label: "Services",
              items: [
                "priv-escalation/insecure-permissions",
                "priv-escalation/scheduled-tasks",
                "priv-escalation/unquoted-service",
                "priv-escalation/insecure-service",
                "priv-escalation/alwaysinstallelevated",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Terminal - Payloads",
          items: ["windows/shell-win", "windows/win-file-transfer"],
        },
        "windows/win-tools",
        "windows/harvesting",
      ],
    },

    /** ------------- Network Services ------------- **/
    {
      type: "category",
      label: "Network Services",
      link: {
        type: "generated-index",
        title: "Network Services",
        description: "Tools, Methodologies on most Common Network Services.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        "network-services/ftp",
        "network-services/nfs",
        "network-services/smb",
        "network-services/smtp",
        "network-services/mysql",
      ],
    },

    /** ------------- Web Vulnerabilities (OWASP etc.) ------------- **/
    {
      type: "category",
      label: "Web Vulnerabilities",
      link: {
        type: "generated-index",
        title: "Web Vulnerabilities",
        description: "Web Based Vulnerabilities.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "Injection",
          items: [
            "injection/command-injection",
            /*{
              type: 'category',
              label: 'Command Injection',
              items: [
                'injection/ci-overview', 'injection/command-injection',
              ],
            },*/
            {
              type: "category",
              label: "LFI",
              items: [
                "injection/localfile-inclusion",
                "injection/remotefile-inclusion",
              ],
            },
            {
              type: "category",
              label: "SQLi",
              items: [
                "injection/errorbased-sqli",
                "injection/blindsqli-authbypass",
                "injection/blindsqli-timebased",
              ],
            },
            {
              type: "category",
              label: "SSTI",
              items: ["injection/ssti"],
            },
          ],
        },
        {
          type: "category",
          label: "Broken Authentication",
          items: [
            "brokenauth/registration",
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
              type: "category",
              label: "JWT",
              items: [
                "brokenauth/jwt-overview",
                "brokenauth/jwt-exploitation",
                "brokenauth/jwt-none",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "XML External Entity",
          items: [
            {
              type: "category",
              label: "General",
              items: [
                "xmlexternalentity/xxe",
                "xmlexternalentity/xxe-exploitation",
              ],
            },
            {
              type: "category",
              label: "SSRF",
              items: [
                "xmlexternalentity/ssrf-overview",
                "xmlexternalentity/ssrf",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "XSS - Cross-Site Scripting",
          items: [
            {
              type: "category",
              label: "General",
              items: ["xss/xss-general", "xss/xss-scenario", "xss/blind-xss"],
            },
            {
              type: "category",
              label: "IDOR",
              items: ["xss/idor-overview", "xss/idor"],
            },
          ],
        },
        {
          type: "category",
          label: "Upload Vulnerabilities",
          items: [
            {
              type: "category",
              label: "General",
              items: [
                "upload-vulnerabilities/rce-filtering",
                "upload-vulnerabilities/serverside-filtering",
                "upload-vulnerabilities/client-filtering",
              ],
            },
          ],
        },
      ],
    },

    /** ------------- Recon ------------- **/
    {
      type: "category",
      label: "Recon",
      link: {
        type: "generated-index",
        title: "Recon",
        description: "Passive - Active Recon",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        "recon/pen-tools",
        {
          type: "category",
          label: "Content Discovery",
          items: ["recon/discovery", "recon/osint"],
        },
      ],
    },

    /** ------------- Tools (General Linux-Windows) ------------- **/
    {
      type: "category",
      label: "Pentesting Tools",
      link: {
        type: "generated-index",
        title: "Pentesting Tools",
        description: "General Information About Tools.",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: ["pentesting-tools/hydra"],
    },
    "credits",
  ],

  /** ------------- Active Directory [Breaching] ------------- **/
  acDocs: [
    "ac-introduction",
    {
      type: "category",
      label: "Breaching",
      link: {
        type: "generated-index",
        title: "Breaching",
        description: "Active Directory [Breaching]",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: [
        {
          type: "category",
          label: "Authentication Relays",
          items: ["ac-breaching/auth-relays", "ac-breaching/intercepting-ntlm"],
        },
        /*{
          
            type: 'category',
            label: 'Configuration Files',
            items: [
              'ac-breaching/config-files',
            ],
        },*/
        {
          type: "category",
          label: "LDAP",
          items: ["ac-breaching/ldap", "ac-breaching/ldap-passback"],
        },
        {
          type: "category",
          label: "MDT",
          items: ["ac-breaching/mdt", "ac-breaching/pxe-boot"],
        },
        {
          type: "category",
          label: "NTLM",
          items: ["ac-breaching/ntlm-auth"],
        },
        "ac-breaching/config-files",
      ],
    },
    {
      type: "category",
      label: "Enumeration",
      link: {
        type: "generated-index",
        title: "Enumeration",
        description: "Active Directory [Enumeration]",
        keywords: ["guides"],
        image: "/img/bitmap.png",
      },
      items: ["ac-enumeration/command-line", "ac-enumeration/powershell"],
    },
  ],
};
module.exports = sidebars;
