

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // Linux VM
  linuxDocs: [
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
            'linux/agentsudo/enumeration', 'linux/agentsudo/exploitation',// [1] Sidebar Element Before [2] Sidebar Dropdown
          ],
        },
        {
          type: 'category',
          label: 'Basic Pentesting',
          items: [
            'linux/basicpentesting/enumeration', 'linux/basicpentesting/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Bounty Hacker',
          items: [
            'linux/bountyhacker/enumeration', 'linux/bountyhacker/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Cyborg',
          items: [
            'linux/cyborg/enumeration', 'linux/cyborg/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Daily Bugle',
          items: [
            'linux/dailybugle/enumeration', 'linux/dailybugle/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Game Zone',
          items: [
            'linux/gamezone/enumeration', 'linux/gamezone/exploitation_one', 'linux/gamezone/exploitation_two',
          ],
        },
        {
          type: 'category',
          label: 'Ignite',
          items: [
            'linux/ignite/enumeration', 'linux/ignite/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Internal',
          items: [
            'linux/internal/enumeration', 'linux/internal/exploitation', 'linux/internal/jenkins',
          ],
        },
        {
          type: 'category',
          label: 'Kenobi',
          items: [
            'linux/kenobi/enumeration', 'linux/kenobi/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Lazy Admin',
          items: [
            'linux/lazyadmin/enumeration', 'linux/lazyadmin/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Lian Yu',
          items: [
            'linux/lianyu/enumeration', 'linux/lianyu/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Pickle Rick',
          items: [
            'linux/picklerick/enumeration', 'linux/picklerick/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Res',
          items: [
            'linux/res/enumeration', 'linux/res/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'RootMe',
          items: [
            'linux/rootme/enumeration', 'linux/rootme/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Simple CTF',
          items: [
            'linux/simplectf/enumeration', 'linux/simplectf/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Skynet',
          items: [
            'linux/skynet/enumeration', 'linux/skynet/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Source VM',
          items: [
            'linux/sourcevm/enumeration', 'linux/sourcevm/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Startup',
          items: [
            'linux/startup/enumeration', 'linux/startup/forensics', 'linux/startup/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'TomGhost',
          items: [
            'linux/tomghost/enumeration', 'linux/tomghost/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Vulnversity',
          items: [
            'linux/vulnversity/enumeration', 'linux/vulnversity/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Wgel',
          items: [
            'linux/wgel/enumeration', 'linux/wgel/exploitation',
          ],
        },
        
      ],
  
    },

    // Windows VM
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
            'windows/alfred/enumeration', 'windows/alfred/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Blaster',
          items: [
            'windows/blaster/enumeration', 'windows/blaster/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Blue',
          items: [
            'windows/blue/enumeration', 'windows/blue/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'HackPark',
          items: [
            'windows/hackpark/enumeration', 'windows/hackpark/blogengine', 'windows/hackpark/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Ice',
          items: [
            'windows/ice/enumeration', 'windows/ice/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Relevant',
          items: [
            'windows/relevant/enumeration', 'windows/relevant/exploitation',
          ],
        },
        {
          type: 'category',
          label: 'Steel Mountain',
          items: [
            'windows/steelmountain/enumeration', 'windows/steelmountain/exploitation', 'windows/steelmountain/manual',
          ],
        },
        
      ],
  
    },
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
            'linux/overpass/enumeration', 'linux/overpass/exploitation', 
          ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Overpass - Hacked',
            items: [
              'linux/overpass_hacked/enumeration', 'linux/overpass_hacked/forensics', 'linux/overpass_hacked/exploitation', 
            ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Overpass - Hosting',
            items: [
              'linux/overpass_hosting/enumeration', 'linux/overpass_hosting/tunneling', 'linux/overpass_hosting/exploitation', 
            ],
        },
        
      ],
  
    },
  ],



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
        // [1] Sidebar Starts
          type: 'category',
          label: 'Injection',
          items: [
            {
              type: 'category',
              label: 'Command Injection',
              items: [
                'injection/overview', 'injection/command_injection',
              ],
            },
            {
              type: 'category',
              label: 'LFI',
              items: [
                'injection/lfi_overview', 'injection/localfile_inclusion', 'injection/remotefile_inclusion',
              ],
            },
            {
              type: 'category',
              label: 'SQLi',
              items: [
                'injection/sqli_overview', 'injection/errorbased_sqli', 'injection/blindsqli_authbypass', 'injection/blindsqli_timebased',
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
              {
                type: 'category',
                label: 'General',
                items: [
                  'brokenauth/general', 'brokenauth/re_registration',
                ],
              },
              {
                type: 'category',
                label: 'Authentication Bypass',
                items: [
                  'brokenauth/user__enumeration', 'brokenauth/logic_flaw', 'brokenauth/brute_force',
                ],
              },
              {
                type: 'category',
                label: 'JWT',
                items: [
                  'brokenauth/overview', 'brokenauth/jwt_exploitation', 'brokenauth/jwt_none',
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
                  'xmlexternalentity/xxe', 'xmlexternalentity/xxe_exploitation',
                ],
              },
              {
                type: 'category',
                label: 'SSRF',
                items: [
                  'xmlexternalentity/overview', 'xmlexternalentity/ssrf',
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
                  'xss/general', 'xss/xss_scenario', 'xss/blind_xss',
                ],
              },
              {
                type: 'category',
                label: 'IDOR',
                items: [
                  'xss/overview', 'xss/idor',
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
                  'uploadvulnerabilities/serverside_filtering', 'uploadvulnerabilities/rce_filtering', 'uploadvulnerabilities/overwriting', 'uploadvulnerabilities/client_filtering',
                ],
              },
            ],
        },
      ],
  
    },
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
            'other/permissions', 'other/passwd_shadow', 'other/commands',  // [1] Sidebar Element Before [2] Sidebar Dropdown
          ],
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Terminal - Payloads',
            items: [ 
              'other/stabilisation', 'other/web_shell',
            ],
        },
      ],
  
    },
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
            'other_win/permissions', 'other_win/commands', 'other_win/tools', 'other_win/harvesting', // [1] Sidebar Element Before [2] Sidebar Dropdown
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
                    'priv_escalation/sebackup_serestore', 'priv_escalation/setakeownership', 'priv_escalation/se_token',
                  ],
              },
              {
                // [1] Sidebar Starts
                  type: 'category',
                  label: 'Services',
                  items: [ 
                    'priv_escalation/insecure_permissions', 'priv_escalation/scheduled_tasks', 'priv_escalation/unquoted_service', 'priv_escalation/insecure_service', 'priv_escalation/alwaysinstallelevated',
                  ],
              },
            ],
            
        },
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Terminal - Payloads',
            items: [ 
              'other_win/shell_win',
            ],
            
        },
      ],
  
    },
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
        {
          // [1] Sidebar Starts
            type: 'category',
            label: 'Digging Tools',
            items: [ 
              'recon/tools',
            ],
        },
      ],
  
    },
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
        {
        // [1] Sidebar Starts
          type: 'category',
          label: 'NMAP',
          items: [
            'tools/discovery', 'tools/basic', 'tools/advanced_one', 'tools/advanced_two', 'tools/nse',
          ],
        },
      ],
  
    },
  ],
};
module.exports = sidebars;
