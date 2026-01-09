const hierarchy = [
    {
        id: '3.1-basics',
        title: '3.1 Basics & Models',
        children: [
            { id: '3.1-topologies', title: 'Topologies & Modes' },
            { id: '3.1-osi', title: 'OSI Model (7 Layers)' },
            { id: '3.1-tcpip', title: 'TCP/IP Model' }
        ]
    },
    {
        id: '3.2-datalink',
        title: '3.2 Data Link Layer',
        children: [
            { id: '3.2-framing', title: 'Framing & Error Control' },
            { id: '3.2-flow', title: 'Flow Control (Sliding Window)' },
            { id: '3.2-access', title: 'Access Control (CSMA/CD)' }
        ]
    },
    {
        id: '3.3-network',
        title: '3.3 Network Layer',
        children: [
            { id: '3.3-ip', title: 'IPv4 vs IPv6' },
            { id: '3.3-subnet', title: 'Subnetting & CIDR' },
            { id: '3.3-routing', title: 'Routing Algos (RIP, OSPF, BGP)' },
            { id: '3.3-protocols', title: 'Protocols (ARP, ICMP, DHCP)' }
        ]
    },
    {
        id: '3.4-transport',
        title: '3.4 Transport Layer',
        children: [
            { id: '3.4-udp', title: 'UDP' },
            { id: '3.4-tcp', title: 'TCP (Handshake & Control)' }
        ]
    },
    {
        id: '3.5-app',
        title: '3.5 Application Layer',
        children: [
            { id: '3.5-http', title: 'HTTP/HTTPS' },
            { id: '3.5-dns', title: 'DNS & Others' }
        ]
    },
    {
        id: '3.6-advanced',
        title: '3.6 Advanced & Security',
        children: [
            { id: '3.6-security', title: 'Network Security (Firewalls, VPNs)' },
            { id: '3.6-infra', title: 'Infrastructure (LB, CDN, Proxy)' },
            { id: '3.6-websockets', title: 'WebSockets vs Long Polling' }
        ]
    }
];

const contentMap = {
    // 3.1 Basics
    '3.1-topologies': {
        title: 'Topologies & Modes',

        oneLinerAnswer: "Topology defines the physical/logical layout (Star, Mesh, Bus) of connections. Modes define direction (Simplex, Half/Full Duplex).",
        why: "Network reliability, cost, and scalability depend entirely on how nodes are connected (e.g., Star is robust, Bus is cheap).",
        tradeoffs: [
            "Star (Robust) vs Mesh (Redundant) vs Bus (Cheap): Star is the industry standard for LANs. Mesh is for WAN backbones.",
            "Cabling Cost: Mesh requires N(N-1)/2 cables, which is impossibly expensive for 100 computers."
        ],
        failureCases: [
            "Single Point of Failure: If the central Switch in a Star topology dies, the whole network dies.",
            "Broadcast Storm: A loop in the topology crashes the network (solved by STP)."
        ],
        realWorldUsage: "Star (Office LAN), Mesh (Internet Backbone), Ring (FDDI - legacy).",

        content: `### Network Connectivity
Network Topology refers to the layout of the interconnections of the graph of a computer network.

1.  **Bus Topology**
    *   **Structure**: Single backbone cable where all nodes tap in.
    *   **Issue**: Collision domain is the entire cable. If the cable breaks, the network dies.
2.  **Star Topology** (Most Common)
    *   **Structure**: All nodes connect to a central **Switch** (or Hub).
    *   **Pros**: Easy to manage. One cable break only affects one machine.
    *   **Cons**: If the Switch fails, everyone disconnects.
3.  **Mesh Topology**
    *   **Full Mesh**: Every node connects to every other node ($N(N-1)/2$ cables).
    *   **Pros**: Zero traffic congestion, highest fault tolerance.
    *   **Cons**: Expensive cabling. Used in **Routers/Backbones**.
4.  **Ring Topology**
    *   **Structure**: Token passing. Unidirectional.
    *   **Pros**: No collisions (Token based).
    *   **Cons**: One node failure breaks the ring (Dual ring fixes this).

### Transmission Modes
*   **Simplex**: Unidirectional (Radio, TV).
*   **Half-Duplex**: Bidirectional but not simultaneous (Walkie-Talkie). Uses collision detection.
*   **Full-Duplex**: Simultaneous Bidirectional (Telephone, Modern Ethernet). Uses two channels.`,
        interviewQuestions: [
            { question: "Why is Star Topology preferred over Bus?", answer: "Fault Isolation. In Bus, a single cable cut brings down the network. In Star, it only isolates one host. Also, Switches in Star eliminate collisions compared to the shared medium of Bus.", companies: ["Cisco", "Juniper"] },
            { question: "What is a Mesh Topology used for?", answer: "High availability backbones (like interconnecting ISPs or Data Centers). It creates redundant paths so if one link fails, traffic reroutes instantly.", companies: ["AWS"] },
            { question: "Difference between Half-Duplex and Full-Duplex?", answer: "Half-Duplex: Like a Walkie-Talkie (One speaks at a time). Full-Duplex: Like a Phone (Both speak simultaneously).", companies: ["Qualcomm"] },
            { question: "Unique: Which topology is the Internet?", answer: "It is a **Network of Networks**, which essentially forms a **Partial Mesh**. ISPs are interconnected redundantly, but your home router connects in a Star/Tree fashion to the ISP.", companies: ["Network Architect"] }
        ]
    },
    '3.1-osi': {
        title: 'OSI Model (7 Layers)',
        visualizerType: 'osi-model',

        oneLinerAnswer: "A conceptual framework (PDNTSPA) describing how data moves from App (L7) to Wire (L1). Universal language for networking.",
        why: "To ensure interoperability. Equipment from Vendor A (Cisco) must talk to Vendor B (Juniper). Layers decouple complexity.",
        tradeoffs: [
            "Modularity vs Overhead: 7 layers mean 7 wrappers (headers) around your data. Efficiency drops.",
            "Theory vs Reality: TCP/IP is the real-world standard; OSI is just a reference model."
        ],
        failureCases: [
            "Encapsulation Error: A layer adds a header the receiving layer doesn't understand.",
            "Protocol Mismatch: Trying to speak IPv6 to an IPv4 router."
        ],
        realWorldUsage: "Troubleshooting: 'Is this a Layer 1 (Cable) or Layer 3 (IP) issue?'",

        content: `### The 7 Layers of Networking
"**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way"

#### 1. Physical Layer (Bits)
*   **Role**: Transmit raw bits over a medium.
*   **Hardware**: Cables (Cat6, Fiber), Hubs, Repeaters.
*   **Unit**: **Bits**.

#### 2. Data Link Layer (Frames)
*   **Role**: Node-to-Node delivery on the *same link*. Error detection (CRC).
*   **Hardware**: Switches, NICs.
*   **Address**: **MAC Address** (48-bit burned in).
*   **Unit**: **Frames**.

#### 3. Network Layer (Packets)
*   **Role**: Host-to-Host delivery across *different networks*. Routing.
*   **Hardware**: Routers.
*   **Address**: **IP Address** (Logical).
*   **Unit**: **Packets**.

#### 4. Transport Layer (Segments)
*   **Role**: Process-to-Process delivery. End-to-End Reliability.
*   **Protocols**: TCP, UDP.
*   **Address**: **Port Number** (16-bit).
*   **Unit**: **Segments** (TCP) / **Datagrams** (UDP).

#### 5. Session Layer
*   **Role**: Session management (Start, Stop, Dialog Control). Sync points.
*   **Example**: RPC, NetBIOS.

#### 6. Presentation Layer
*   **Role**: Translation, Encryption, Compression.
*   **Example**: SSL/TLS, JPEG, ASCII to EBCDIC.

#### 7. Application Layer
*   **Role**: Services for the end user.
*   **Protocols**: HTTP, FTP, SMTP, DNS.`,
        interviewQuestions: [
            { question: "Hub vs Switch vs Router?", answer: "**Hub** (Layer 1): Dumb repeater. Broadcasts to all. High collisions. **Switch** (Layer 2): Intelligent. Filters based on MAC table. Creates separate collision domains. **Router** (Layer 3): Connects different networks (WAN). Filters based on IP. Creates separate broadcast domains.", companies: ["Cisco", "Google"] },
            { question: "Which layer handles Encryption?", answer: "The Presentation Layer (Layer 6). It translates data into a readable format (Encryption/Decryption happens here, e.g., TLS before sending to Session).", companies: ["Palo Alto"] },
            { question: "Where does MAC Address reside?", answer: "Data Link Layer (Layer 2). It is the physical address burned into the NIC.", companies: ["Intel"] },
            { question: "Unique: Why do we need the Session Layer?", answer: "In modern TCP/IP, we mostly don't. It's collapsed into the Application layer. But conceptually, it handles 'Dialog Control' (who speaks next?) and synchronization (checkpoints in large transfers).", companies: ["Cisco"] }
        ]
    },
    '3.1-tcpip': {
        title: 'TCP/IP Model',
        visualizerType: 'tcp-model',

        oneLinerAnswer: "The practical 4-layer model (Application, Transport, Internet, Network Access) on which the entire Internet runs.",
        why: "OSI was too complex/slow. TCP/IP won the protocol war because it focused on robustness and interconnecting different net types.",
        tradeoffs: [
            "Simplicity vs Specificity: TCP/IP collapses OSI's top 3 layers into one (App). Harder to distinguish Session/Presentation logic.",
            "Standardization: Tightly coupled to specific protocols (TCP, IP) unlike generic OSI."
        ],
        failureCases: [
            "IP Fragmentation: If packet > MTU, it splits. If one fragment is lost, the whole packet dies.",
            "Routing Loop: Packet bounces between routers forever (solved by TTL)."
        ],
        realWorldUsage: " The Internet.",

        content: `### The Real-World Standard
The OSI model is a reference. TCP/IP is the implementation used by the Internet. It condenses 7 layers into 4.

| TCP/IP Layer | OSI Equivalence | Protocols | PDU |
| :--- | :--- | :--- | :--- |
| **Application** | App + Pres + Sess | HTTP, SSH, DNS | Data |
| **Transport** | Transport | TCP, UDP | Segment |
| **Internet** | Network | IP, ICMP, ARP | Packet |
| **Link** | Data Link + Physical | Ethernet, Wi-Fi | Frame |

### Encapsulation
As data moves **Down** the stack, headers are added.
1.  **App**: \`[Data]\`
2.  **Transport**: \`[SrcPort|DestPort | Data]\`
3.  **Internet**: \`[SrcIP|DestIP | SrcPort|DestPort | Data]\`
4.  **Link**: \`[SrcMAC|DestMAC | SrcIP|DestIP | SrcPort|DestPort | Data | CRC]\`

When receiving, data moves **Up** and headers are stripped (Decapsulation).`,
        interviewQuestions: [
            { question: "Unique: Why 4 layers in TCP/IP vs 7 in OSI?", answer: "OSI is a **Reference Model** (Theoretical). TCP/IP is the **Implementation Model** (Practical). In practice, Session and Presentation layers are just part of the Application (Protocol designers handle encryption/sessions themselves).", companies: ["Google"] }
        ]
    },

    // 3.2 Data Link
    '3.2-framing': {
        title: 'Framing & Error Control',

        oneLinerAnswer: "Framing marks packet boundaries (Start/End). Error Control (CRC, Checksum) detects corruption.",
        why: "Physical layer just sends raw bits (1101...). We need to know where a packet begins and ends.",
        tradeoffs: [
            "Overhead vs Reliability: Adding large CRC guarantees integrity but wastes bandwidth.",
            "Retransmission (ARQ) vs Correction (FEC): Retrying is cheaper for rare errors. Correction is needed for noisy live streams."
        ],
        failureCases: [
            "Frame Slip: Receiver loses track of where frames start -> Garbage data.",
            "Undetected Error: CRC collision (rare) allows bad data to pass."
        ],
        realWorldUsage: "Ethernet Frame (Preamble + CRC), Wi-Fi.",

        content: `### Framing
The Data Link layer must delimit the start and end of a frame from the raw bit stream.
1.  **Byte Stuffing**: Insert a special escape byte (\`ESC\`).
2.  **Bit Stuffing**: If the flag is \`01111110\`, and data contains \`01111110\`, the sender stuffs a \`0\` after five \`1\`s (\`011111010\`) to break the pattern.

### Error Detection
Data Link layer *detects* errors. Transport layer *retransmits*.
1.  **Parity Bit**: Add 1 bit. Even/Odd parity. (Detects 1-bit error only).
2.  **CRC (Cyclic Redundancy Check)**:
    *   Uses Polynomial Division (modulo-2 arithmetic).
    *   Sender appends a "Remainder". Receiver divides by the same divisor. If Remainder != 0, error.
3.  **Checksum**: Used in IP/TCP headers. Sums 16-bit words and takes 1s complement.`,
        code: {
            python: `def crc_check(data_bits, divisor):
    remainder = data_bits % divisor
    return remainder == 0`
        },
        interviewQuestions: [
            { question: "CRC vs Checksum?", answer: "CRC is based on polynomial division and is robust against burst errors. Checksum is simple addition and is weaker but faster to compute (used in Transport layer).", companies: ["Cisco"] },
            { question: "Unique: Why does Ethernet use CRC (Link) but IP uses Checksum (Network)?", answer: "Link layer (Hardware) needs strong protection against physical noise. Hardware calculates CRC fast. Network layer (Software) prioritizes routing speed, so it does a quick-and-dirty Checksum.", companies: ["Network Fundamentals"] }
        ]
    },
    '3.2-flow': {
        title: 'Flow Control & Sliding Window',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sliding_window_protocol.svg/800px-Sliding_window_protocol.svg.png',
        oneLinerAnswer: "Prevents a fast sender from drowning a slow receiver. Sliding Window improves efficiency over Stop-and-Wait.",
        why: "Buffer overflow. If I send 1Gbps to your 10Mbps phone, packets get dropped.",
        tradeoffs: [
            "Stop-and-Wait: Simple but utilizes < 1% of bandwidth on long links.",
            "Sliding Window: high utilization but complex states (Sequence numbers, ACKs)."
        ],
        failureCases: [
            "Buffer Bloat: Latency spikes because large buffers hide congestion.",
            "Window Collapse: Receiver advertises 0 window -> deadlock (solved by persisting timer)."
        ],
        realWorldUsage: "TCP Sliding Window.",
        content: `### Preventing Buffer Overflow
Ensuring a fast sender doesn't overwhelm a slow receiver.

#### 1. Stop- and - Wait
            *   ** Logic **: Send Frame 1 -> Wait for Ack 1 -> Send Frame 2.
*   ** Flaw **: If RTT is high(e.g., Space link), link utilization is< 1%.

#### 2. Sliding Window Protocols
*   ** Concept **: Allow Sender to transmit \`N\` frames (Window Size) before needing an ACK.
*   **Go-Back-N**:
    *   Receiver has Window Size = 1.
    *   If Frame 5 is lost, Receiver discards 6, 7, 8...
    *   Sender must resend **All** frames starting from 5.
*   **Selective Repeat**:
    *   Receiver has Window Size > 1.
    *   If Frame 5 is lost, Receiver buffers 6, 7, 8.
    *   Sender resends **Only** Frame 5. (More complex logic).`,
        interviewQuestions: [
            { question: "What is Piggybacking?", answer: "Instead of sending a separate ACK packet (which allows overhead), the receiver attaches the ACK to the next outgoing data packet (Data + ACK).", companies: ["Akamai"] }
        ]
    },
    '3.2-access': {
        title: 'Access Control (MAC)',
        oneLinerAnswer: "Rules for speaking on a shared medium (like a party). CSMA/CD (Ethernet) listens before talking. CSMA/CA (Wi-Fi) avoids talking over others.",
        why: "Without it, if two people talk at once, signals collide and both are garbage.",
        tradeoffs: [
            "Collision Detection (Wired) vs Avoidance (Wireless): You can't hear collisions on radio (one antenna), so you must Avoid.",
            "Efficiency: At high load, collisions rise exponentially (Aloha Network)."
        ],
        failureCases: [
            "Hidden Node Problem (Wi-Fi): A and C can't hear each other, both talk to B -> Collision.",
            "Jamming: Malicious node screams noise, blocking channel."
        ],
        realWorldUsage: "Ethernet (CSMA/CD), Wi-Fi (CSMA/CA).",
        content: `### Media Access Control
When nodes share a medium (Bus/WiFi), we need rules to prevent chaos.

#### 1. CSMA/CD (Collision Detection) - Ethernet
*   **Carrier Sense**: Listen to the wire. If busy, wait.
*   **Multiple Access**: If free, transmit.
*   **Collision Detection**: Listen *while* talking. If voltage spike (Collision):
    1.  Stop talking immediately.
    2.  Send **Jam Signal** to warn others.
    3.  Wait random time (**Binary Exponential Backoff**). $K * 512$ bit times.
    
#### 2. CSMA/CA (Collision Avoidance) - Wi-Fi
*   In Wireless, you can't listen while talking (half-duplex radio).
*   **Logic**:
    1.  Send **RTS** (Request to Send).
    2.  Access Point sends **CTS** (Clear to Send). "Quiet everyone, Node A is talking".
    3.  Transmit data.
    4.  Wait for ACK. (No ACK = Collision assumed).`,
        interviewQuestions: [
            { question: "Why CSMA/CD doesn't work in WiFi?", answer: "1. **Hidden Node Problem**: A can hear B, C can hear B, but A and C cannot hear each other. They might collide at B without knowing. 2. **Signal Strength**: Transmitting signal swamps the receiving antenna, making detection impossible.", companies: ["Qualcomm", "Apple"] },
            { question: "What is Backoff in CSMA/CD?", answer: "When a collision is detected, the sender waits for a random amount of time (Binary Exponential Backoff) before retrying to minimize repeat collisions.", companies: ["Cisco"] },
            { question: "Unique: What if the Backoff was fixed time?", answer: "If everyone waited exactly 1 second, they would ALL collide again at exactly 1 second. Randomness is key to breaking the synchronization loop.", companies: ["Algorithm Design"] }
        ]
    },

    // 3.3 Network
    '3.3-ip': {
        title: 'IPv4 vs IPv6',

        oneLinerAnswer: "IPv4 uses 32-bit addresses (4 billion limit, ran out). IPv6 uses 128-bit addresses (infinite).",
        why: "We ran out of IPv4 addresses in 2011. NAT kept us alive, but IPv6 is the long term solution.",
        tradeoffs: [
            "IPv4: Universal support but requires NAT. Header is variable length (slower processing).",
            "IPv6: No NAT needed (end-to-end connectivity). Fixed header size (faster routing). Hard to memorize."
        ],
        failureCases: [
            "Address Exhaustion: ISP runs out of public IPs -> uses CGNAT (double NAT).",
            "MTU Issues: IPv6 doesn't allow fragmentation at routers, can cause black holes."
        ],
        realWorldUsage: "Dual-Stack (Running both IPv4 and IPv6 on home routers).",

        content: `### The Addressing Crisis
The Network Layer handles logical addressing and routing.

#### IPv4 (Legacy King)
*   **Format**: 32-bit (e.g., \`192.168.1.1\`).
*   **Capacity**: ~4.3 Billion addresses. (Ran out in 2011).
*   **Header**: 20-60 Bytes. Variable size (Options).
*   **Fragmentation**: Performed by Routers. High CPU cost.
*   **Configuration**: DHCP or Manual.

#### IPv6 (The Future)
*   **Format**: 128-bit Hexadecimal (e.g., \`2001:0db8::ff00:42:8329\`).
*   **Capacity**: $3.4 \\times 10^{38}$ (Undecillion). Enough for every grain of sand on Earth.
*   **Header**: 40 Bytes Fixed. Faster processing.
*   **Fragmentation**: Sender ONLY. Routers drop packets if too big (Path MTU Discovery).
*   **Security**: IPSec built-in.`,
        interviewQuestions: [
            { question: "What is the Loopback Address?", answer: "**127.0.0.1** (IPv4) or **::1** (IPv6). It bypasses the network card and routes traffic back to the host kernel. Used for testing.", companies: ["Microsoft"] },
            { question: "What is an A Record vs CNAME?", answer: "A Record: Maps Hostname -> IP (google.com -> 8.8.8.8). CNAME: Maps Hostname -> Hostname (www.google.com -> google.com).", companies: ["Cloudflare"] },
            { question: "What is Split-Horizon DNS?", answer: "Providing different DNS answers depending on who is asking (e.g., Internal employees get private IPs, External users get public IPs).", companies: ["AWS"] },
            { question: "Why do we need IPv6?", answer: "We ran out of IPv4 addresses (only 4 billion). IPv6 provides 3.4 x 10^38 addresses, simpler headers, and better security (IPSec).", companies: ["Cisco"] },
            { question: "Unique: Is IPv4 completely dead?", answer: "Far from it! NAT (Network Address Translation) saved it. Most of the internal internet still runs on IPv4 private ranges (192.168.x.x) mapped to public IPs.", companies: ["ISP"] }
        ]
    },
    '3.3-subnet': {
        title: 'Subnetting & CIDR',

        oneLinerAnswer: "Logical division of an IP network. CIDR (Classless Inter-Domain Routing) replaced old Classes (A, B, C) to save IPs.",
        why: "To reduce routing table size and conserve IP space. A router only needs to know '192.168.1.0/24' is that way, not every single IP inside it.",
        tradeoffs: [
            "Variable Length Subnet Masking (VLSM: Efficient IP use but complex management.",
            "Flat Network: Easy but broadcasts flood everything (bad performance)."
        ],
        failureCases: [
            "Overlapping Subnets: Two networks typically configured with the same range -> routing confusion.",
            "Broadcast Storm: Subnet too large (e.g., /16) leads to too much noise."
        ],
        realWorldUsage: "AWS VPC (designing /24 subnets for availability zones).",

        content: `### Slicing the Network
**Subnetting** takes a large network and cuts it into smaller "Subnets" to reduce broadcast traffic and improve security.

#### CIDR Notation (Classless Inter-Domain Routing)
Format: \`IP / PrefixLength\`
*   Example: \`192.168.1.0/24\`
*   **/24**: First 24 bits are Network, remaining 8 bits are Host.

#### Calculating Hosts
*   **Formula**: $2^{(32 - Prefix)} - 2$
*   *Why -2?*
    1.  First IP: **Network Address** (Identifier).
    2.  Last IP: **Broadcast Address** (Talk to everyone).

#### Example: /26 Mask
*   Prefix: 26. Host Bits: $32 - 26 = 6$.
*   Total Hosts: $2^6 - 2 = 62$ hosts per subnet.
*   Subnets created from a /24: 4.`,
        code: {
            text: `Given: 192.168.1.0/24
We want subnets with 50 hosts each.
Bits needed for 50 hosts: 2^6 = 64. (6 bits).
New Prefix: 32 - 6 = /26.
Subnets:
1. 192.168.1.0   - 192.168.1.63
2. 192.168.1.64  - 192.168.1.127
3. 192.168.1.128 - 192.168.1.191
4. 192.168.1.192 - 192.168.1.255`
        }
    },
    '3.3-routing': {
        title: 'Routing Algorithms',

        oneLinerAnswer: "RIP (Distance Vector - Hop Count), OSPF (Link State - Dijkstra), BGP (Path Vector - Policy/AS).",
        why: "The internet is a graph. We need to find the best path from A to B explicitly.",
        tradeoffs: [
            "Convergence Speed: OSPF is fast (floods map). RIP is slow (rumors).",
            "Scalability: BGP scales to the whole internet. OSPF melts above a few thousand routers."
        ],
        failureCases: [
            "Count to Infinity (RIP): Bad news travels slow.",
            "BGP Hijack: Announcing you own IP prefixes you don't (Youtube/Pakistan incident)."
        ],
        realWorldUsage: "BGP (Internet Core), OSPF (Enterprise LAN).",

        content: `### The GPS of the Internet
Routing is the process of finding the best path from Source to Destination.

#### 1. Distance Vector (RIP)
*   **Philosophy**: "Tell your neighbors everything you know."
*   **Metric**: Hop Count (Max 15).
*   **Algorithm**: Bellman-Ford.
*   **Issue**: Slow convergence. **Count-to-Infinity** problem.

#### 2. Link State (OSPF)
*   **Philosophy**: "Tell EVERYONE who your neighbors are."
*   **Mechanism**: LSA Flooding. Every router builds a full map.
*   **Algorithm**: **Dijkstra's Shortest Path**.
*   **Pros**: Fast convergence, loop-free. High CPU usage.

#### 3. Path Vector (BGP)
*   **Protocol**: Border Gateway Protocol.
*   **Role**: **Inter-AS** Routing. Connects ISPs.
*   **Metric**: Policy + Path Length.
*   **Importance**: If BGP breaks, the Internet breaks (e.g., Facebook outage 2021).`,
        code: {
            python: `# Dijkstra Logic (Conceptual)
pq.push((0, start_node))
while pq:
    curr_dist, u = pq.pop()
    for v, weight in graph[u]:
        if curr_dist + weight < dist[v]:
            dist[v] = curr_dist + weight
            pq.push((dist[v], v))`
        },
        interviewQuestions: [
            { question: "Difference between IGP and EGP?", answer: "**IGP (Interior Gateway Protocol)**: Used *inside* an organization (OSPF, RIP). Focuses on speed. **EGP (Exterior Gateway Protocol)**: Used *between* organizations (BGP). Focuses on policy/trust.", companies: ["Cisco", "Juniper"] },
            { question: "Unique: Why is BGP called the 'Tape that holds the Internet together'?", answer: "Because it tells ISP A how to reach ISP B. Without it, your request to 'youtube.com' would never leave your provider's network. It is trust-based, which is its biggest weakness (BGP Hijacking).", companies: ["Cloudflare"] }
        ]
    },
    '3.3-protocols': {
        title: 'Network Protocols (ARP, ICMP, DHCP)',

        oneLinerAnswer: "ARP (IP->MAC), ICMP (Ping/Error Report), DHCP (Assigns Dynamic IP).",
        why: "Glue protocols. IP packets need MAC addresses to travel wires (ARP). Networks need debugging (ICMP). hosts need auto-config (DHCP).",
        tradeoffs: [
            "Static IP vs DHCP: Static is reliable for servers. DHCP is effortless for clients.",
            "ARP Broadcasting: Floods network. Security risk (ARP Spoofing)."
        ],
        failureCases: [
            "IP Conflict: Two devices grab same IP.",
            "ARP Poisoning: Attacker redirects traffic to themselves."
        ],
        realWorldUsage: "Every time you connect to WiFi (DHCP) or Ping google.com (ICMP).",

        content: `### The Supporting Cast (Layer 3)

#### 1. ARP (Address Resolution Protocol)
*   **Problem**: I have IP \`10.0.0.5\`, but Ethernet needs a MAC address.
*   **Action**: Broadcast "Who has 10.0.0.5?"
*   **Reply**: "I do! My MAC is AA:BB:CC...".
*   *Security Risk*: ARP Spoofing (Man-in-the-Middle).

#### 2. ICMP (Internet Control Message Protocol)
*   **Role**: Error reporting & Diagnostics. (Layer 3 helper).
*   **Usage**:
    *   **Ping**: Sends \`Echo Request\`.
    *   **Traceroute**: Sends packets with increasing TTL (1, 2, 3...) to discover hops.
    *   **Errors**: "Destination Unreachable", "Time Exceeded".

#### 3. NAT (Network Address Translation)
*   **Problem**: We ran out of IPv4 addresses.
*   **Solution**: Your home router has ONE Public IP. All devices (Phone, Laptop) use Private IPs (\`192.168.x.x\`).
*   **Mechanism**: Router modifies headers and tracks connections in a translation table.
*   **Pat (Port Address Translation)**: Maps Private IP + Port -> Public IP + New Port.`
    },

    // 3.4 Transport
    '3.4-udp': {
        title: 'UDP (User Datagram Protocol)',

        oneLinerAnswer: "Connectionless, unreliable, lightweight protocol. Fire and forget.",
        why: "Speed. TCP handshake and ACKs take time. Real-time apps (Voice/Video) prefer losing a frame to buffering.",
        tradeoffs: [
            "Speed vs Reliability: UDP is raw speed. No retransmission, no ordering.",
            "Complexity: App layer must handle packet loss if it cares."
        ],
        failureCases: [
            "Packet Loss: Video glitches / robotic voice.",
            "DDOS Amplification: Spoofing source IP to reflect UDP traffic."
        ],
        realWorldUsage: "DNS, VoIP (Zoom), Gaming, Streaming (quic).",

        content: `### The Minimalist
A simple, connectionless protocol (RFC 768).
*   **Attributes**: Unreliable, Unordered, Lightweight.
*   **Header**: **8 Bytes** (Source Port, Dest Port, Length, Checksum).
*   **Philosophy**: "Fire and Forget".

### Use Cases
1.  **Real-Time Media**: (Zoom, VoIP, Gaming). Latency is worse than data loss. Waiting for a retransmission kills the "Live" feel.
2.  **DNS**: Single packet request/response. Handshank overhead is unnecessary.
3.  **Bootstrapping**: DHCP/TFTP.`,
        code: {
            python: `sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.sendto(b"Hello", ("127.0.0.1", 8080))`
        }
    },
    '3.4-tcp': {
        title: 'TCP (Transmission Control Protocol)',
        visualizerType: 'tcp-handshake',

        oneLinerAnswer: "Connection-oriented, reliable stream service. Uses 3-Way Handshake (SYN, SYN-ACK, ACK) and Flow/Congestion Control.",
        why: "Most apps (Web, Email, Chat) need guaranteed delivery. Dealing with packet loss in every app locally is hard.",
        tradeoffs: [
            "Reliability vs Latency: Retransmission means waiting. Head-of-Line blocking reduces speed.",
            "Stateful: Server must remember open connections (Resource heavy)."
        ],
        failureCases: [
            "SYN Flood: Attacker sends million SYNs, server fills connection table and dies.",
            "Zombie Connection: Connection stays open forever if FIN not sent properly."
        ],
        realWorldUsage: "HTTP, SSH, FTP, Email.",

        content: `### The Reliable Workhorse
A connection-oriented protocol ensuring reliable, in-order delivery.

#### 1. The Header (20 Bytes)
*   **Flags**:
    *   **SYN**: Synchronize (Start connection).
    *   **ACK**: Acknowledge (Receipt).
    *   **FIN**: Finish (Graceful close).
    *   **RST**: Reset (Abort connection).
    *   **PSH**: Push (Pass to app immediately).

#### 2. Three-Way Handshake
1.  **SYN**: Client -> Server (Seq=X).
2.  **SYN-ACK**: Server -> Client (Ack=X+1, Seq=Y).
3.  **ACK**: Client -> Server (Ack=Y+1). **Established**.

#### 3. Flow vs Congestion Control
*   **Flow Control**: Protects the **Receiver**. (Uses Window Size field).
*   **Congestion Control**: Protects the **Network**. (Uses algos like TCP Tahoe, Reno).
    *   *Slow Start*: Exponentially increase speed until packet loss.
    *   *Backoff*: Cut speed in half if loss detected.`,
        interviewQuestions: [
            { question: "What is the TIME_WAIT state?", answer: "After closing a connection, the Client waits for 2 * MSL (Max Segment Lifetime) to ensure the final ACK reached the server. It prevents lingering packets from confusing new connections.", companies: ["Facebook", "Netflix"] },
            { question: "What is the SYN Flood Attack?", answer: "Attacker sends thousands of SYN packets but never sends the final ACK. Server waits, filling up its memory (Backlog Queue), crashing the system.", companies: ["Palo Alto"] },
            { question: "What is Window Size in TCP?", answer: "It tells the sender how much data the receiver can accept right now. If Window=0, sender stops sending until window opens.", companies: ["Google"] }
        ]
    },

    // 3.5 Application
    '3.5-http': {
        title: 'HTTP, HTTPS & Versions',

        oneLinerAnswer: "Stateless, text-based request-response protocol. HTTPS adds TLS encryption. HTTP/2 adds multiplexing. HTTP/3 uses UDP (QUIC).",
        why: "To fetch web pages. It is the language of the web browsers.",
        tradeoffs: [
            "HTTP/1.1 vs HTTP/2: 1.1 has Head-of-Line blocking (one req per connection). 2 is binary and multiplexed (fast).",
            "Statelessness: Simple server design, but needs Cookies to remember users."
        ],
        failureCases: [
            "404 Not Found: Client asked for wrong resource.",
            "500 Internal Server Error: Server code crashed."
        ],
        realWorldUsage: "Everything on the Web.",

        content: `### The Logic of the Web Protocol
Stateless, Request-Response protocol using TCP Port 80.

#### HTTP Evolution
1.  **HTTP/1.0**: One TCP connection per file. Slow.
2.  **HTTP/1.1**: **Keep-Alive**. Reuses TCP connection for multiple files. (Head-of-Line Blocking issue).
3.  **HTTP/2**: **Multiplexing**. Sends multiple streams in parallel over one connection. Binary (not text).
4.  **HTTP/3 (QUIC)**: Uses **UDP**. Replaces TCP to fix Head-of-Line blocking entirely.

#### HTTPS (Secured)
*   **TLS Handshake**: Adds encryption.
*   **Public Key**: Used to exchange a "Session Key".
*   **Symmetric Key**: Used to encrypt the actual data (AES).`,
        interviewQuestions: [
            { question: "GET vs POST?", answer: "**GET**: Retrieve data. Idempotent (Safe to repeat). Parameters in URL. **POST**: Submit data. Non-idempotent. Parameters in Body.", companies: ["Amazon"] },
            { question: "Unique: Why is HTTPS slower than HTTP?", answer: "The **TLS Handshake**. It adds 2 extra RTTs (Round Trip Times) to establish encryption keys before the first byte of data is sent. HTTP/3 fixes this with 0-RTT resumption.", companies: ["Cloudflare"] }
        ]
    },
    '3.5-dns': {
        title: 'DNS (Domain Name System)',
        visualizerType: 'dns-lookup',

        oneLinerAnswer: "The Phonebook of the Internet. Translates human names (google.com) to IPs (142.250.x.x). uses UDP port 53.",
        why: "Humans can't memorize IPs. We need names.",
        tradeoffs: [
            "Recursion vs Iteration: Recursive puts load on server. Iterative puts load on client.",
            "TTL: High TTL = Fast (Cached) but slow updates. Low TTL = Fresh data but high load."
        ],
        failureCases: [
            "DNS Propagation Delay: Changing website IP takes 24h to update globally.",
            "DDoS: Mirai botnet took down Dyn DNS, taking down half the internet."
        ],
        realWorldUsage: "Every URL visit starts with a DNS query.",

        content: `### The Phonebook of the Internet
The phonebook of the internet. Translates \`google.com\` -> IP.

#### The Lookup Journey (Recursive)
1.  **Browser Cache**: "Do I know google.com?"
2.  **OS Cache (/etc/hosts)**.
3.  **Resolver (ISP/8.8.8.8)**: "I'll find it."
4.  **Root Server (.)**: "Go to .com".
5.  **TLD Server (.com)**: "Go to google.com Name Server".
6.  **Authoritative NS**: "Here is the IP: 1.2.3.4".

#### Record Types
*   **A**: IPv4 Address.
*   **AAAA**: IPv6 Address.
*   **CNAME**: Alias (www -> root).
*   **MX**: Mail Exchange (Email routing).
*   **NS**: Name Server (Delegation).`,
        code: {
            bash: `dig +trace google.com
# Watch the recursion from Root -> TLD -> Anycast`
        },
        interviewQuestions: [
            { question: "What happens when you type google.com?", answer: "1. DNS Resolution (UDP 53). 2. TCP Handshake (IP, ARP). 3. TLS Handshake. 4. HTTP Request (GET). 5. Server Response (200 OK + HTML). 6. Browser Parsing (DOM, CSSOM, JS).", companies: ["Google", "Amazon - SDE I"] },
            { question: "Why does DNS use UDP?", answer: "Speed. DNS queries are small enough to fit in one packet. TCP handshake overhead is unjustified for a single request-response.", companies: ["Akamai"] },
            { question: "What is a TLD?", answer: "Top Level Domain. The last part of a URL (.com, .org, .io). Managed by IANA.", companies: ["GoDaddy"] },
            { question: "Unique: Why can't I just create my own TLD like '.ruthvik'?", answer: "You can, but the Root Servers won't know about it. You'd need to pay ICANN ~$185k application fee and prove technical competence to get it added to the Root Zone.", companies: ["ICANN"] }
        ]
    },

    // --- 3.6 Advanced Concepts ---
    '3.6-security': {
        title: 'Network Security (Firewalls, VPNs)',

        oneLinerAnswer: "Firewall: Filter traffic based on rules (Port/IP). VPN: Encrypt tunnel to hide traffic from ISP/Hackers. TLS: End-to-End Encryption.",
        why: "The internet is public and hostile. We need Confidentiality, Integrity, and Availability (CIA).",
        tradeoffs: [
            "Security vs Usability: Strict firewalls break apps. VPNs slow down speed.",
            "Symmetric vs Asymmetric Encryption: Symmetric is fast (AES). Asymmetric is safe for key exchange (RSA)."
        ],
        failureCases: [
            "Man-in-the-Middle (MITM): Attacker intercepts unencrypted HTTP.",
            "DDOS: Flooding a server until the firewall gives up."
        ],
        realWorldUsage: "Corporate VPNs, HTTPS Lock Icon.",

        content: `### Defending the Fort
How do we protect the data flowing through the pipes?

#### 1. Firewalls
* **Packet Filtering (Stateless)**: Look at Header only. "Block all traffic on Port 80". Fast but dumb.
* **Stateful Inspection**: Tracks the *state* of connections. "Allow inbound traffic on Port 80 ONLY IF it is a response to an outbound request."
* **Application Gateway (WAF)**: Looks at the *Data* (Layer 7). "Block this SQL Injection string".

#### 2. VPN (Virtual Private Network)
* **Concept**: Creates a secure "Tunnel" over a public network (Internet).
* **Mechanism**: Encapsulation + Encryption (IPSec or SSL/TLS).
* **Use Case**: Accessing corporate Intranet from a coffee shop securely.

#### 3. DDoS (Distributed Denial of Service)
* **Attack**: Flooding a server with junk traffic from a "Botnet" (thousands of infected devices).
* **Mitigation**: Rate Limiting, Anycast Routing, CDN absorption.`,
        interviewQuestions: [
            { question: "Symmetric vs Asymmetric Encryption?", answer: "**Symmetric** (AES): Same key to encrypt/decrypt. Fast. Hard to share key securely. **Asymmetric** (RSA): Public Key to encrypt, Private Key to decrypt. Slow. Used to exchange the Symmetric key (TLS Handshake).", companies: ["Palo Alto Networks"] }
        ]
    },
    '3.6-infra': {
        title: 'Infrastructure (LB, CDN, Proxy)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Load_balancer.svg/1200px-Load_balancer.svg.png',
        oneLinerAnswer: "LB: Distributes traffic across servers. CDN: Caches static content near users. Proxy: Acts on behalf of client (Forward) or Server (Reverse).",
        why: "Scale. One server can't handle 1 billion users. We need to spread the load and cache content.",
        tradeoffs: [
            "L4 vs L7 LB: L4 is fast (Packet level). L7 is smart (URL level) but computationally expensive.",
            "CDN Cache Invalidation: Hard to ensure users see the *new* image instantly."
        ],
        failureCases: [
            "Thundering Herd: 1 million users hit the DB at once when cache expires.",
            "Single Point of Failure: If the Load Balancer dies, no one can reach the 1000 web servers."
        ],
        realWorldUsage: "Netflix (CDN for video), Nginx (Reverse Proxy/LB).",

        content: `### Scaling the Internet
You cannot run Google on a single server.

#### 1. Load Balancer (LB)
* **Role**: Distributes incoming traffic across multiple servers (Backend Pool) to prevent overload.
* **Algorithms**:
    * **Round Robin**: Server 1, then 2, then 3...
    * **Least Connections**: Send to the server with fewest active users.
    * **IP Hash**: Sticky Session. User A always goes to Server 1.
* **Layer 4 LB**: Balances based on IP/Port (Fast).
* **Layer 7 LB**: Balances based on URL/Cookies (Smart).

#### 2. CDN (Content Delivery Network)
* **Concept**: A network of servers distributed globally (Edge Locations).
* **Function**: Caches static assets (Images, CSS, Video) closer to the user.
* **Benefit**: Lower Latency. User in India downloads Netflix video from Mumbai server, not US server.

#### 3. Proxy vs Reverse Proxy
* **Forward Proxy**: Acts on behalf of the **Client**. (e.g., VPN, School Content Filter). "Hides the Client".
* **Reverse Proxy**: Acts on behalf of the **Server**. (e.g., Nginx, Cloudflare). "Hides the Server". Handles SSL termination, Load Balancing.`,
        interviewQuestions: [
            { question: "What happens if a Load Balancer goes down?", answer: "SPOF (Single Point of Failure). Solution: Run a Passive/Standby LB using protocols like VRRP. If Active dies, Standby takes over the Virtual IP.", companies: ["System Design"] },
            { question: "Unique: Can a CDN serve dynamic content?", answer: "Generally NO. CDNs cache static files (Images, CSS). However, 'Edge Computing' (Cloudflare Workers) allows running code at the edge, blurring the line.", companies: ["Netflix"] }
        ]
    },
    '3.6-websockets': {
        title: 'WebSockets vs Long Polling',

        oneLinerAnswer: "WebSocket: Persistent, full-duplex connection (Real-time). Long Polling: Client asks 'Any new data?' repeatedly (Legacy).",
        why: "HTTP is request-response. Server can't 'push' data. WebSockets solve this for Chat/Games.",
        tradeoffs: [
            "Statefulness: WebSockets require keeping TCP connection open (RAM heavy).",
            "Compatibility: Corporate firewalls sometimes block non-HTTP traffic."
        ],
        failureCases: [
            "Connection Drop: Mobile networks drop idle sockets. Needs Keep-Alive ping.",
            "Socket Exhaustion: Server runs out of file descriptors (max 65k ports)."
        ],
        realWorldUsage: "Slack, Discord, Multiplayer Games, Stock Tickers.",

        content: `### Real-Time Communication
HTTP is "Client asks, Server gives". What if the Server wants to push data (e.g., Chat app)?

#### 1. Polling (The Old Way)
* **Short Polling**: Client asks "New msg?" every 1 second. (Wasteful).
* **Long Polling**: Client asks. Server *holds* the connection open until a new msg arrives. (Better, but high server load).

#### 2. WebSockets (The Standard)
* **Protocol**: \`ws://\` or \`wss://\`.
* **Mechanism**: Starts as HTTP Handshake -> "Upgrades" to TCP Socket.
* **Benefit**: **Full-Duplex**, persistent connection. Server can push data instantly. Low overhead.
* **Use Case**: Chat, Stock Tickers, Multiplayer Games.

#### 3. SSE (Server-Sent Events)
* **Mechanism**: One-way channel (Server -> Client) over HTTP.
* **Use Case**: Twitter Feed, Live Scores. (Simpler than WebSockets if client doesn't need to speak).`,
        code: {
            javascript: `// WebSocket Example
const socket = new WebSocket('wss://api.chat.com');
socket.onmessage = (event) => {
    console.log("New Message:", event.data);
};`
        }
    }
};

const flatten = (items) => {
    let flat = [];
    items.forEach(item => {
        if (item.children) {
            flat = flat.concat(flatten(item.children));
        } else {
            const details = contentMap[item.id] || {};
            if (!details.content) {
                details.content = "Detailed content coming soon...";
            }
            flat.push({ ...item, ...details });
        }
    });
    return flat;
};

const cnData = {
    id: 'cn',
    hierarchy: hierarchy,
    topics: flatten(hierarchy)
};

export default cnData;
