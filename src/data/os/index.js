const hierarchy = [
    {
        id: '1.1-intro',
        title: '1.1 Introduction',
        children: [
            {
                id: '1.1-basics',
                title: 'Basics',
                children: [
                    { id: '1.1-basics-def', title: 'Definition & Goals' }, // Merged
                    { id: '1.1-basics-goals', title: 'Functions of OS' }
                ]
            },
            {
                id: '1.1-types',
                title: 'Types of OS',
                children: [
                    { id: '1.1-types-batch', title: 'Batch OS' },
                    { id: '1.1-types-multi', title: 'Multiprogramming' },
                    { id: '1.1-types-task', title: 'Multitasking' },
                    { id: '1.1-types-rtos', title: 'Real-Time (RTOS)' },
                    { id: '1.1-types-dist', title: 'Distributed & Clustered' }
                ]
            },
            {
                id: '1.1-structure',
                title: 'System Structure',
                children: [
                    { id: '1.1-struct-mode', title: 'User vs Kernel Mode' },
                    { id: '1.1-struct-calls', title: 'System Calls' }
                ]
            }
        ]
    },
    {
        id: '1.2-process',
        title: '1.2 Process Management',
        children: [
            {
                id: '1.2-concepts',
                title: 'Process Concepts',
                children: [
                    { id: '1.2-conc-pcb', title: 'PCB' },
                    { id: '1.2-conc-states', title: 'Process States' },
                    { id: '1.2-ipc-shared', title: 'IPC: Shared Memory' }, // Kept as valuable content
                    { id: '1.2-ipc-msg', title: 'IPC: Message Passing' },
                    { id: '1.2-ipc-mech', title: 'IPC: Pipes & Signals' }
                ]
            },
            {
                id: '1.2-scheduling',
                title: 'Scheduling',
                children: [
                    { id: '1.2-sched-types', title: 'Preemptive vs Non-Preemptive' },
                    { id: '1.2-algo-fcfs', title: 'FCFS' },
                    { id: '1.2-algo-sjf', title: 'SJF & SRTF' },
                    { id: '1.2-algo-rr', title: 'Round Robin' },
                    { id: '1.2-algo-priority', title: 'Priority & MLQ' }
                ]
            },
            {
                id: '1.2-threads',
                title: 'Threads',
                children: [
                    { id: '1.2-thread-diff', title: 'Process vs Thread' },
                    { id: '1.2-thread-worker', title: 'User vs Kernel Threads' },
                    { id: '1.2-thread-models', title: 'Multithreading Models' }
                ]
            },
            {
                id: '1.2-sync',
                title: 'Process Synchronization',
                children: [
                    { id: '1.2-sync-race', title: 'Critical Section & Race Conditions' },
                    { id: '1.2-sol-sem', title: 'Semaphores' },
                    { id: '1.2-sol-mon', title: 'Monitors' },
                    { id: '1.2-prob-prod', title: 'Producer-Consumer' },
                    { id: '1.2-prob-read', title: 'Reader-Writer' },
                    { id: '1.2-prob-dine', title: 'Dining Philosophers' }
                ]
            }
        ]
    },
    {
        id: '1.3-deadlocks',
        title: '1.3 Deadlocks',
        children: [
            {
                id: '1.3-conditions',
                title: 'Conditions',
                children: [
                    { id: '1.3-intro', title: 'The 4 Conditions' }
                ]
            },
            {
                id: '1.3-handling',
                title: 'Handling',
                children: [
                    { id: '1.3-handle-prev', title: 'Prevention' },
                    { id: '1.3-handle-avoid', title: 'Avoidance (Banker)' },
                    { id: '1.3-handle-detect', title: 'Detection & Recovery' }
                ]
            }
        ]
    },
    {
        id: '1.4-memory',
        title: '1.4 Memory Management',
        children: [
            {
                id: '1.4-basics',
                title: 'Basics',
                children: [
                    { id: '1.4-addr', title: 'Addresses & MMU' },
                    { id: '1.4-segment', title: 'Contiguous Alloc (Segmentation)' }
                ]
            },
            {
                id: '1.4-paging',
                title: 'Paging',
                children: [
                    { id: '1.4-paging-mech', title: 'Page Table & TLB' },
                    { id: '1.4-frag', title: 'Fragmentation' }
                ]
            },
            {
                id: '1.4-virt',
                title: 'Virtual Memory',
                children: [
                    { id: '1.4-virt-mech', title: 'Demand Paging & Faults' },
                    { id: '1.4-thrush', title: 'Thrashing' }
                ]
            },
            {
                id: '1.4-replace',
                title: 'Page Replacement Algos',
                children: [
                    { id: '1.4-repl', title: 'FIFO, LRU, Optimal' }
                ]
            }
        ]
    },
    {
        id: '1.5-storage',
        title: '1.5 Storage & File Systems',
        children: [
            {
                id: '1.5-disk',
                title: 'Disk Scheduling',
                children: [
                    { id: '1.5-disk-struct', title: 'Disk Mechanics' },
                    { id: '1.5-disk-sched', title: 'Algorithms (FCFS, SSTF, SCAN)' }
                ]
            },
            {
                id: '1.5-fs',
                title: 'File Systems',
                children: [
                    { id: '1.5-file', title: 'Attributes, Ops, Allocation' },
                    { id: '1.5-raid', title: 'RAID Levels' }
                ]
            }
        ]
    },
    {
        id: '1.6-advanced',
        title: '1.6 Advanced Concepts',
        children: [
            {
                id: '1.6-virt',
                title: 'Virtualization & Cloud',
                children: [
                    { id: '1.6-virt-hyper', title: 'Hypervisors (Type 1 vs 2)' },
                    { id: '1.6-virt-container', title: 'Containers (Docker) vs VMs' }
                ]
            },
            {
                id: '1.6-security',
                title: 'Security & Protection',
                children: [
                    { id: '1.6-sec-access', title: 'Access Control (ACLs vs Capabilities)' },
                    { id: '1.6-sec-buffer', title: 'Buffer Overflow' }
                ]
            },
            {
                id: '1.6-linux',
                title: 'Linux Internals',
                children: [
                    { id: '1.6-linux-sys', title: 'VFS (Virtual File System)' },
                    { id: '1.6-linux-load', title: 'Load Average & Systemd' }
                ]
            }
        ]
    }
];

const contentMap = {
    // 1.1 Intro


    '1.1-basics-goals': {
        title: 'Primary Goals & Core Functions',

        oneLinerAnswer: "The OS has three main mandates: Efficiency (utilize hardware), Convenience (abstract hardware), and Isolation (protect processes from each other).",
        why: "Without an OS, every programmer would need to write code to spin the hard disk motor. We need a standard library for hardware control.",
        tradeoffs: [
            "Convenience vs Efficiency: Abstractions (like Python) are easier but slower than raw hardware access (Assembly).",
            "Fairness vs Throughput: Being fair to all users might reduce the total work done."
        ],
        failureCases: [
            "Resource Starvation: One process hogs the CPU, others freeze.",
            "Fragmentation: Memory is available but scattered, so we can't use it."
        ],
        realWorldUsage: "Desktop (Convenience), Server (Efficiency), Mainframe (Throughput).",

        content: `### Core Functions Breakdown

#### 1. Process Management(The Chef)
A process is a program in execution.The OS is responsible for:
* Creating and deleting processes(user and system).
* Suspending and resuming processes.
* Providing mechanisms for ** Synchronization ** and ** Communication **.

#### 2. Memory Management(The Warehouse Manager)
Memory is a large array of bytes.The OS must:
* Keep track of which parts of memory are currently being used and by whom.
* Decide which processes(or parts thereof) and data to move into and out of memory.
* Allocate and deallocate memory space as needed.

#### 3. Storage Management(The Librarian)
The OS provides a uniform, logical view of information storage -> ** The File **.
*   ** File System **: Creates directories, organizes files.
*   ** Mass - Storage **: Disks, SSDs.OS manages free space, storage allocation, and disk scheduling.

#### 4. I / O System Management(The Traffic Cop)
    *   ** Buffering **: Storing data temporarily while it is being transferred.
*   ** Caching **: Storing parts of data in faster storage for performance.
*   ** Drivers **: Specific code to talk to specific hardware(e.g., Nvidia Driver).`,
        code: {
            c: `// Structure of a Generic OS Module
struct FileManager {
    void (* create_file)(char * name);
    void (* delete_file)(char * name);
    File * (* open_file)(char * name, char * mode);
}; `,
            java: `// Interface Definition for File Manager
interface FileManager {
    void createFile(String name);
void deleteFile(String name);
    File openFile(String name, String mode);
}`,
            python: `# Python Protocol equivalent
from typing import Protocol

class File:
    pass # Placeholder for a File object

class FileManager(Protocol):
    def create_file(self, name: str) -> None: ...
    def delete_file(self, name: str) -> None: ...
    def open_file(self, name: str, mode: str) -> File: ...`
        },
        interviewQuestions: [
            { question: "Why do we need I/O Buffering?", answer: "To cope with speed mismatch between producer and consumer (e.g., Fast CPU vs Slow Printer). Also to adapt to devices that have different data transfer sizes.", companies: ["Nvidia"] },
            { question: "What acts as the 'Interrupt Handler'?", answer: "The OS Driver. When a hardware device finishes a task, it raises an interrupt, and the CPU jumps to the driver's Interrupt Service Routine (ISR).", companies: ["Intel"] },
            { question: "Difference between Spooling and Buffering?", answer: "Spooling uses Disk (e.g., Print Queue) and handles jobs from different users. Buffering uses RAM and handles speed mismatch data streams.", companies: ["IBM"] },
            { question: "Unique: Why don't we just make the buffer infinite?", answer: "Because RAM is finite and expensive. Also, an infinite buffer increases **Latency**. If you buffer 10 hours of video, the user waits 10 hours to see the first frame. You want the minimal buffer to smooth out jitter.", companies: ["Netflix"] }
        ]
    },
    '1.1-kernel-arch': {
        title: 'Kernel Architectures',

        oneLinerAnswer: "Monolithic Kernels run everything in Ring 0 for speed; Microkernels run services in User Space for stability.",
        why: "We need to decide where to put the drivers. Inside the kernel (fast but dangerous) or outside (safe but slow)?",
        tradeoffs: [
            "Monolithic: Fast communication (function calls) but a crash in Audio Driver kills the system.",
            "Microkernel: Stable (isolated services) but slow communication (IPC overhead)."
        ],
        failureCases: [
            "BSOD (Blue Screen): In Monolithic, any driver bug crashes the OS.",
            "IPC Deadlock: In Microkernels, services waiting on each other can freeze."
        ],
        realWorldUsage: "Monolithic: Linux, Windows (Hybrid). Microkernel: QNX (Cars), Minix.",

        content: `### Monolithic vs Microkernel

#### 1. Monolithic Kernel(The "All-in-One")
The entire OS is placed in kernel space and runs in a single address space.
*   ** Example **: Linux, Unix, MS - DOS.
*   ** Pros **:
    *   ** Performance **: System calls are just function calls. Very low overhead.
*   ** Cons **:
    *   ** Fragility **: If one driver(e.g., Audio) crashes, it overwrites kernel memory -> ** Kernel Panic ** (Blue Screen).
    *   ** Size **: Millions of lines of code.Hard to maintain.

#### 2. Microkernel(The "Minimalist")
Moves as much as possible from the kernel into "user space".The Kernel only handles ** Inter - Process Communication(IPC) **, ** Memory **, and ** Scheduling **.
*   ** Example **: Mach, QNX, Minix.
*   ** Pros **:
    *   ** Reliability **: If a driver crashes, just restart that service.The Kernel survives.
    *   ** Security **: Smaller attack surface.
*   ** Cons **:
    *   ** Performance **: Passing messages between user modules requires Context Switching, which is slow.

#### Comparison Table
    | Feature | Monolithic | Microkernel |
| : --- | : --- | : --- |
| ** Size ** | Large | Small |
| ** Speed ** | Fast | Slower(IPC overhead) |
| ** Stability ** | Low(One crash kills all) | High(Isolated crashes) |
| ** Services ** | Inside Kernel | Outside Kernel(User Mode) | `,
        code: {
            bash: `# Linux is Monolithic, but supports Modules
lsmod # List loaded kernel modules
modprobe bluetooth # Load a module`,
            c: `// Microkernel IPC concept (C)
// Message Passing between FileSystem and DiskDriver
struct Message {
    int type; // READ_BLOCK
    int block_id;
    int data;
};
// Simplified: In a real microkernel, 'send' would be a system call
// that traps to the kernel to perform the message transfer.
// send(DISK_DRIVER_PID, &msg); // Syscall`,
            python: `# Microkernel Concept (Python Sim)
# In a microkernel, services communicate via message passing.
# The kernel facilitates this communication.

class Message:
    def __init__(self, content):
        self.content = content

class Service:
    def __init__(self, name):
        self.name = name
        self.inbox = []

    def receive(self, message):
        self.inbox.append(message)
        print(f"{self.name} received: {message.content}")

def microkernel_ipc(sender: Service, receiver: Service, message: Message):
    print(f"Kernel: Facilitating IPC from {sender.name} to {receiver.name}")
    # In a real system, this would involve context switches and kernel mediation
    receiver.receive(message)

# Example usage:
file_system_service = Service("FileSystem")
disk_driver_service = Service("DiskDriver")

read_request = Message("Read block 123")
microkernel_ipc(file_system_service, disk_driver_service, read_request)`
        },
        interviewQuestions: [
            { question: "Why is Windows considered a Hybrid Kernel?", answer: "Windows NT has a microkernel-like design (HAL), but for performance reasons, the Graphics Subsystem and Drivers run in Kernel mode. It balances modularity with raw speed.", companies: ["Microsoft"] },
            { question: "Monolithic vs Microkernel Performance?", answer: "Monolithic is faster because system calls are direct function calls within the same address space. Microkernels require Context Switching and Message Passing between user-space services, which adds overhead.", companies: ["Google"] }
        ]
    },
    '1.1-boot': {
        title: 'System Boot Process',

        oneLinerAnswer: "The Boot sequence is a chain of trust: BIOS checks Hardware -> Loads MBR -> Start Bootloader (GRUB) -> Loads Kernel -> Starts User Space (init).",
        why: "RAM is volatile. We need a hardware-hardcoded path (BIOS) to pull the OS from the non-volatile Disk into RAM at startup.",
        tradeoffs: [
            "Speed vs Flexibility: A hardcoded bootloader is fast but can't dual-boot. GRUB is complex but flexible.",
            "Security: Secure Boot prevents malware but restricts OS choice."
        ],
        failureCases: [
            "Corrupt MBR: 'Operating System Not Found'.",
            "Kernel Panic during init: Driver missing for the root filesystem."
        ],
        realWorldUsage: "Every computer startup. Android 'Fastboot'.",

        content: `### The Bootstrapping Procedure
"Booting" comes from "Pulling oneself up by their bootstraps".

#### Step 1: BIOS/UEFI & POST
*   **Power On**: CPU initializes and looks at a specific memory address (mapped to ROM).
*   **POST (Power-On Self-Test)**: Checks RAM, Keyboard, Screen. One beep = OK.
*   **BIOS**: Basic Input/Output System. Finds the **Boot Device** (HDD, USB).

#### Step 2: The Master Boot Record (MBR)
*   The first **512 Bytes** of the disk is the MBR.
*   It contains the **Partition Table** and the **Boot Loader** code.

#### Step 3: The Boot Loader (GRUB)
*   A small program that understands file systems.
*   It loads the **Operating System Kernel** from the disk into the RAM.
*   *Examples*: GRUB (Linux), NTLDR (Windows).

#### Step 4: Kernel Initialization
*   The Kernel starts executing.
*   Detects hardware, mounts the Root File System.
*   Starts the **Init Process** (PID 1).

#### Step 5: The Init Process
*   The ancestor of all processes.
*   Starts background daemons (Network, Sound, UI).
*   Presents Login Screen.`,
        code: {
            asm: `; Simplified MBR Code
bits 16
org 0x7c00
mov si, hello_msg
call print_string
jmp $ ; Infinite loop
hello_msg db 'Loading OS...', 0
times 510-($-$$) db 0
dw 0xAA55 ; Boot Signature`,
            c: `// GRUB-style Kernel Loader
void load_kernel() {
    // 1. Read Kernel from Disk Sector X
    read_disk(KERNEL_SECTOR, RAM_ADDR);
    // 2. Jump to Kernel Entry Point
    void (*kernel_entry)() = (void(*)())RAM_ADDR;
    kernel_entry();
}`,
            python: `# Boot Process Simulation
def boot():
    if post_check():
        mbr = read_disk(0)
        if mbr.signature == 0xAA55:
            load_kernel()
        else:
            print("No Boot Device")`
        },
        interviewQuestions: [
            { question: "What is the difference between Cold and Warm Boot?", answer: "Cold Boot = Power off -> Power On (POST runs). Warm Boot = Restart (Skips full hardware checks).", companies: ["Dell"] },
            { question: "What is the role of the Bootloader (GRUB)?", answer: "It lives in the MBR/EFI partition. Its job is to load the Kernel from the disk filesytem into RAM and transfer control to it.", companies: ["Red Hat"] }
        ]
    },

    // 1.1 Types
    '1.1-types-batch': {
        title: 'Batch Operating Systems',

        oneLinerAnswer: "A legacy system (1950s) where jobs are grouped into batches and executed sequentially without user interaction.",
        why: "Setup time was expensive. Grouping similar jobs (e.g., all Fortran jobs) reduced operator overhead.",
        tradeoffs: [
            "Throughput vs Latency: High throughput (CPU never idle waiting for user) but terrible latency (wait hours for results).",
            "Debuggability: No interactive debugging. Errors mean re-submitting the job."
        ],
        failureCases: [
            "Infinite Loop: One bad job halts the entire batch until operator kills it.",
            "Card Jam: Physical failure of input deck."
        ],
        realWorldUsage: "Mainframes (Payroll processing, Bank settlements).",

        content: `### Overview
Used in the 1950s-60s. The user **never interacts** directly with the computer.
1.  User prepares a job (Code + Data + Control instructions) on Punch Cards.
2.  Operator groups similar jobs into a **Batch**.
3.  Computer executes batch sequentially.

### The Problem: CPU Idleness
I/O devices (Card Readers) are slow. CPU is fast.
*   When executing a job, if it needs to read a card, the CPU waits.
*   **CPU Utilization** was extremely low.

### The Solution: Spooling
*   **S**imultaneous **P**eripheral **O**peration **O**n-**L**ine.
*   Jobs are read from cards onto a **Disk** (faster than card reader).
*   When a job finishes, the CPU reads the next job from Disk.
*   *Analogy*: Printer Queue. You "print" 10 files instantly. The printer takes its time. Your computer is free.`,
        code: {
            text: `Batch Monitor Logic:
while (true) {
   load_next_job();
   run_job();
   // If job crashes, dump memory and continue
   print_damp();
}`,
            python: `# Batch System Simulation
job_queue = ["Job1", "Job2", "Job3"]

def run_batch():
    for job in job_queue:
        load_job(job)
        execute(job) # If this blocks for I/O, CPU sits idle
        save_results(job)`,
            c: `// Spooling Logic
void spooler_daemon() {
    while(1) {
        if (card_reader_has_job) {
            copy_card_to_disk(); // Happens while CPU is busy running previous job!
        }
    }
}`
        },
        interviewQuestions: [
            { question: "What is the main disadvantage of Batch OS?", answer: "Lack of interaction. If you have a syntax error on line 1, you find out 4 hours later when the printout arrives. Debugging is a nightmare.", companies: ["IBM"] },
            { question: "What is Spooling?", answer: "Simultaneous Peripheral Operation On-Line. It overlaps the I/O of one job with the computation of another by using the disk as a buffer (e.g., Print Spooler).", companies: ["Mainframe Era"] }
        ]
    },
    '1.1-types-multi': {
        title: 'Multiprogramming',
        visualizerType: 'multiprogramming',

        oneLinerAnswer: "Maximizes CPU utilization by keeping multiple jobs in memory; if one waits for I/O, the CPU switches to another.",
        why: "I/O is slow (milliseconds) and CPU is fast (nanoseconds). If we don't switch, the CPU is idle 99% of the time.",
        tradeoffs: [
            "Efficiency vs Complexity: Massive CPU gains but requires memory protection so Job A doesn't crash Job B.",
            "Responsiveness: Still no guarantee of user interaction, just CPU efficiency."
        ],
        failureCases: [
            "Memory Exhaustion: Loading too many jobs fills RAM (Thrashing).",
            "Starvation: A long CPU-bound job might prevent I/O jobs from running."
        ],
        realWorldUsage: "The basis of all modern OS (even your phone does this).",

        content: `### Maximize CPU Utilization
**Goal**: Keep the CPU busy at all times.
*   **Concept**: Several jobs are kept in memory at one time.
*   **Mechanism**: The OS picks a job and begins to execute it. When that job needs to wait for an I/O operation (like reading a disk), the OS simply **switches** to another job.
*   **Analogy**: A lawyer calling a client. While Client A is "on hold" (I/O), the lawyer talks to Client B.

> **Note**: In a non-multiprogrammed system (Uniprogramming), the CPU would sit idle during I/O.`,
        interviewQuestions: [
            { question: "Does Multiprogramming provide user responsiveness?", answer: "Not necessarily. It focuses on CPU efficiency. If a job does zero I/O and calculates Pi forever, it might hog the CPU indefinitely (depending on preemption).", companies: ["IBM"] },
            { question: "Degree of Multiprogramming?", answer: "The number of processes currently in memory. The Long-Term Scheduler controls this to ensure the system doesn't thrash.", companies: ["Cisco"] }
        ]
    },
    '1.1-types-task': {
        title: 'Multitasking (Time-Sharing)',

        oneLinerAnswer: "A logical extension of multiprogramming where CPU switches so frequently (Time Quantum) that users feel they have a dedicated machine.",
        why: "Humans need interactivity (typing, clicking). We cannot wait for a batch job to finish just to move the mouse.",
        tradeoffs: [
            "Responsiveness vs Throughput: Frequent context switching wastes CPU cycles (overhead) to buy user happiness.",
            "Fairness: Hard to decide who gets the next time slice."
        ],
        failureCases: [
            "System Freeze: If the scheduler fails or too many processes exist, the time slice becomes too small (Thrashing).",
            "Priority Inversion: High priority mouse click waits for low priority disk write."
        ],
        realWorldUsage: "Unix, Windows, macOS, Android.",

        content: `### Maximize Responsiveness
**Goal**: Allow multiple users/programs to interact with the computer simultaneously.
*   **Concept**: CPU switches jobs so frequently that users can interact with each program while it is running.
*   **Mechanism**: **Time Sharing**. The OS gives each process a small slice of time (Quantum). When time is up, it forces a switch, even if the process didn't ask for I/O.
*   **Analogy**: A Chess Master playing 10 games at once. He spends 5 seconds on Board 1, moves to Board 2, etc. To the players, it feels like he is playing only them.

| Feature | Multiprogramming | Multitasking |
| :--- | :--- | :--- |
| **Trigger** | I/O Wait (Voluntary) | Timer Interrupt (Forced) |
| **Objective** | High CPU Usage | User Responsiveness |
| **OS Support** | Simple Scheduling | Complex Preemptive Scheduling |`,
        code: {
            c: `// Pseudo-Code for Timer Interrupt
void on_timer_tick() {
    process[current].state = READY;
    current = (current + 1) % distinct_processes;
    process[current].state = RUNNING;
}`,
            java: `// Java Thread Scheduling (Concept)
Thread t1 = new Thread(() -> {
    while(true) {
        // Do work
        Thread.yield(); // Voluntary (Multiprogramming style in some old JVMs)
    }
});
// Modern JVM uses Native OS Threads (Preemptive)`,
            python: `# Time Sharing Sim
import time
def scheduler(tasks, quantum=0.1):
    while tasks:
        current_task = tasks.pop(0)
        current_task.run(quantum) # Run for 100ms
        if not current_task.finished:
            tasks.append(current_task) # Round Robin`
        },
        interviewQuestions: [
            { question: "Is Multitasking possible on a single-core CPU?", answer: "Yes. By switching rapidly (e.g., every 10ms), the OS creates the *illusion* of parallelism. This is called Concurrency.", companies: ["Intel", "AMD"] },
            { question: "What defines 'Time Sharing'?", answer: "A logical extension of multiprogramming where the CPU switches jobs so frequently that users can interact with each program while it is running.", companies: ["Unix"] }
        ]
    },
    '1.1-types-rtos': {
        title: 'Real-Time Operating Systems (RTOS)',

        oneLinerAnswer: "An OS where correctness depends not just on the logical result but also on the *time* at which it is delivered.",
        why: "In safety-critical systems (Airbags, Pacemakers), a late answer is a wrong answer.",
        tradeoffs: [
            "Predictability vs Features: RTOS strips away virtual memory and complex scheduling to guarantee timing.",
            "Cost: Hard to develop and verify."
        ],
        failureCases: [
            "Missed Deadline: Airbag deploys 100ms too late = Death.",
            "Priority Inversion: The Mars Pathfinder buggy famously restarted due to this RTOS bug."
        ],
        realWorldUsage: "VxWorks (Mars Rover), QNX (Cars), FreeRTOS (IoT).",

        content: `### Defined by Time
An RTOS is defined not by how "fast" it is, but by how **Predictable** (Deterministic) it is.

#### Hard Real-Time
*   **Constraint**: Missing a deadline is a **Failure**.
*   **Examples**: Weapon systems, Airbag control, Pacemaker.
*   **Storage**: Often no Disk. No Virtual Memory (Page faults are unpredictable!). ROM based.

#### Soft Real-Time
*   **Constraint**: Missing a deadline is **Annoying** (Quality Drop).
*   **Examples**: Video Streaming (Netflix), Virtual Reality, Reservation Systems.
*   **Storage**: Standard support.`,
        code: {
            c: `// VxWorks (RTOS) style task creation
taskSpawn("SafetyCheck", 100 /* Priority */, 0, 2000, safety_code, 0,0,0,0,0);
// Priority is strictly enforced. Preemption is immediate.`
        },
        interviewQuestions: [
            { question: "Why is 'Latency' the most critical metric for RTOS?", answer: "Latency (Interrupt to Action time) must be bounded. In windows, a click might take 10ms or 500ms depending on load. In RTOS, it MUST take < 10ms always.", companies: ["Tesla"] },
            { question: "Soft vs Hard Real-Time?", answer: "Hard: Failure to meet deadline is fatal (Pacemaker). Soft: Missing deadline is annoying but tolerable (Video streaming drop frame).", companies: ["SpaceX"] }
        ]
    },
    '1.1-types-dist': {
        title: 'Distributed & Clustered Systems',

        oneLinerAnswer: "A system where computation is spread across multiple physical nodes communicated via network to achieve Scale or Reliability.",
        why: "Vertical Scaling (bigger CPU) hits a physics limit. Horizontal Scaling (more CPUs) is limitless.",
        tradeoffs: [
            "Consistency vs Availability (CAP Theorem): You can't have perfect consistency and 100% uptime in a distributed net.",
            "Complexity: Partial failure (one node down) is hard to handle."
        ],
        failureCases: [
            "Split Brain: Network cuts, and two parts of the cluster think they are the 'Master'.",
            "Network Partition: Nodes can't talk, data drifts apart."
        ],
        realWorldUsage: "Google Search (Distributed), Oracle RAC (Clustered).",

        content: `### Distributed Systems
"A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable." - Leslie Lamport.
*   **Loosely Couple**: Separate Clock, Separate RAM. Connect via LAN.
*   **Client-Server**: Server provides resource, Client consumes.
*   **Peer-to-Peer**: No central authority. Torrents.

### Clustered Systems
Two or more individual systems merged together.
*   **Tightly Coupled**: They work together as a single robust unit.
*   **Goal**: **High Availability**. If Node A fails, Node B picks up its work instantly.
*   **Example**: Database clusters (Oracle RAC), Supercomputers.`,
        code: {
            bash: `# Checking Cluster Status
pcs status
# Online: [node1, node2]
# Resources: WebServer (Started)`
        },
        interviewQuestions: [
            { question: "What is 'Graceful Degradation'?", answer: "The ability of a system to maintain limited functionality even when a large portion of it has been destroyed or rendered inoperative. (e.g., A cluster of 10 nodes loses 2, but still serves traffic, just slower).", companies: ["AWS"] },
            { question: "Tightly vs Loosely Coupled Systems?", answer: "Tightly: Share memory and clock (Parallel systems). Loosely: Distributed systems (Cluster) with separate memory and clocks.", companies: ["Google"] }
        ]
    },

    // 1.1 Structure
    '1.1-struct-mode': {
        title: 'Dual Mode Operation',

        oneLinerAnswer: "Hardware separation into User Mode (Ring 3) and Kernel Mode (Ring 0) to prevent apps from destroying the system.",
        why: "If users had full access, a buggy game could accidentally overwrite the OS kernel memory. We need a 'Sandbox'.",
        tradeoffs: [
            "Safety vs Speed: Every System Call requires a Mode Switch (Context Switch), which is expensive.",
            "Complexity: Passing data between modes requires copying."
        ],
        failureCases: [
            "Privilege Escalation: Malware tricks the OS into running its code in Kernel Mode (Rootkit).",
            "Blue Screen: If Kernel Mode code crashes, everything dies."
        ],
        realWorldUsage: "x86 Rings, ARM Exception Levels.",

        content: `### The need for Protection
We cannot trust user programs. They might have bugs, or they might be malicious.
To solve this, hardware separates execution into two modes:

#### 1. User Mode (Bit = 1)
*   The "Sandbox".
*   Cannot execute **Privileged Instructions** (e.g., Disable Interrupts, Access raw memory, Switch mode).
*   If a program tries to do this -> **Exception** (Crash).

#### 2. Kernel Mode (Bit = 0)
*   "God Mode".
*   Can execute any instruction.
*   The OS Kernel runs here.

### The Trap (Switching)
How does a User program read a file? It can't touch the disk.
1.  User calls \`open()\`.
2.  The library executes a **TRAP** instruction (Software Interrupt).
3.  Hardware flips mode bit $1 \to 0$.
4.  Hardware jumps to the **Interrupt Vector Table** (OS Code).
5.  OS checks credentials, reads disk.
6.  OS executes **Return from Trap**. Mode bit $0 \to 1$.`,
        code: {
            text: `Flow:
User App -> System Call (Library) -> TRAP ->
[KERNEL MODE] -> Dispatcher -> Read Disk -> Return ->
[USER MODE] -> App Continues`
        },
        interviewQuestions: [
            { question: "What acts as the 'Gatekeeper' between User and Kernel mode?", answer: "The System Call Interface. It ensures users enter the kernel only at specific, safe entry points (like a bank teller window) rather than jumping freely into the vault.", companies: ["AMD"] },
            { question: "Why do we need a Dual Mode operation?", answer: "To protect the OS and other users from a malicious or buggy program. Privileged instructions (Halt, I/O) can only be executed in Kernel Mode.", companies: ["Intel"] }
        ]
    },
    '1.1-struct-calls': {
        title: 'System Calls',

        oneLinerAnswer: "The programmatic interface (API) that apps use to request services (File I/O, Net, Proc) from the Kernel.",
        why: "User apps cannot touch hardware. They must ask the Kernel nicely via System Calls.",
        tradeoffs: [
            "Security vs Performance: Checking every request validates security but adds latency.",
            "Portability: POSIX standardizes calls so code runs on Linux/macOS, but Windows is different."
        ],
        failureCases: [
            "Invalid Parameter: Passing a null pointer to read() crashes the app.",
            "Permission Denied: Trying to open() /etc/shadow returns -1."
        ],
        realWorldUsage: "open(), fork(), exec(), write().",

        content: `### The API of the Operating System
System calls provide an interface to the services made available by the OS.

### Parameter Passing
How do we send data (like a filename) to the Kernel?
1.  **Registers**: Simplest. Load data into registers (EAX, EBX). Limit on size.
2.  **Block/Table**: Store data in memory, pass the *address* of the block in a register. (Linux uses this).
3.  **Stack**: Push onto stack, OS pops.

### Types of System Calls
*   **Process Control**: \`end\`, \`abort\`, \`load\`, \`execute\`.
*   **File Management**: \`create\`, \`delete\`, \`open\`, \`close\`, \`read\`, \`write\`.
*   **Device Management**: \`request\`, \`release\`.
*   **Information**: \`get_time\`, \`get_date\`.
*   **Communication**: \`send\`, \`receive\`.`,
        code: {
            c: `// Using syscall() directly in C
#include <unistd.h>
#include <sys/syscall.h>

int main() {
    char msg[] = "Hello Kernel\\n";
    // Direct system call invoking WRITE (1) to STDOUT (1)
    syscall(SYS_write, 1, msg, sizeof(msg)-1);
    return 0;
}`
        },
        interviewQuestions: [
            { question: "Why do we use APIs (like Win32 or POSIX) instead of raw System Calls?", answer: "Portability and Simplicity. Raw system calls (interrupt numbers) change between OS versions. APIs remain consistent. Also, APIs handle the complex register setup for us.", companies: ["Google"] },
            { question: "fork() vs exec()?", answer: "fork() creates a duplicate process (Child). exec() replaces the current process memory with a NEW program. Usually used together: fork() then exec().", companies: ["Linux"] }
        ]
    },
    // PLACEHOLDERS FOR 1.2, 1.3, 1.4, 1.5 - TO BE FILLED IN NEXT STEPS
    // 1.2 Process Management
    '1.2-conc-pcb': {
        title: 'Process Control Block (PCB)',

        oneLinerAnswer: "A data structure in the Kernel that stores all information about a specific process (PID, Registers, State, Open Files) needed to resume it after a context switch.",
        why: "To multitask, the OS must pause one process and run another. It needs a place to save the 'snapshot' of the paused process.",
        tradeoffs: [
            "Memory Overhead: Every process needs a PCB, which consumes Kernel Memory. Too many processes = OOM.",
            "Context Switch Cost: Saving/Restoring the PCB takes CPU cycles (overhead)."
        ],
        failureCases: [
            "Zombie Process: PCB remains in memory even after termination until parent calls wait().",
            "PID Exhaustion: If the OS runs out of PIDs (limited by PCB array size), no new process can start."
        ],
        realWorldUsage: "Linux task_struct, Windows EPROCESS.",

        content: `### The Soul of a Process
When a program is loaded into memory, it is no longer just a passive file on disk. It becomes an active **Process**. To manage it, the OS creates a critical data structure called the **Process Control Block (PCB)** (or Task Struct in Linux).

#### What's Inside?
The PCB is the "Mainfest" of the process. It is stored in **Kernel Space** (protected memory).

| Field | Description |
| :--- | :--- |
| **PID (Process ID)** | Unique Integer (e.g., 2043) identifying the process. |
| **Program Counter (PC)** | The address of the *next* instruction to be executed. |
| **CPU Registers** | Snapshot of the CPU state (Stack Ptr, Accumulator) to allow resuming. |
| **Start State** | Current Status (Ready, Running, Blocked). |
| **Memory Limits** | Base & Limit registers, Page Table pointers. |
| **Open Files** | List of File Descriptors (stdin, stdout, networks sockets). |

### Context Switching
When the CPU switches from Process A to Process B:
1.  **Save Concept**: Save Process A's registers/PC into $PCB_A$.
2.  **Load Concept**: Load Process B's registers/PC from $PCB_B$.
3.  **Resume**: Jump to Process B's PC.

> **Note**: Context Switching is pure overhead. No useful work is done during this time.`,
        code: {
            c: `// Simplified Linux 'task_struct'
struct task_struct {
    long state;       // -1: Unrunnable, 0: Runnable, >0: Stopped
    int pid;
    struct task_struct *parent;
    struct mm_struct *mm;    // Memory Descriptor
    struct files_struct *files; // Open Files list
    char comm[16];   // Command name (e.g., "chrome")
};`
        },
        interviewQuestions: [
            { question: "Where is the PCB stored?", answer: "In the Kernel Stack area of main memory. It is a kernel data structure, inaccessible to the user program.", companies: ["VMware"] },
            { question: "What happens to the PCB when a process terminates?", answer: "It is deallocated. However, some info (exit status) remains in a 'Zombie' state until the Parent process calls wait() to collect it.", companies: ["Google"] },
            { question: "Does a Context Switch happen for Threads?", answer: "Yes, but it is cheaper. The OS switches Thread Control Blocks (TCB). The Memory Address Space remains the same, so TLB/Cache is not flushed.", companies: ["Salesforce"] },
            { question: "What information is NOT saved during Context Switch?", answer: "Static program code (Text Section) is not 'saved' as it doesn't change. It sits in memory or on disk.", companies: ["Adobe"] },
            { question: "Unique: If context switching is overhead, why not stop switching?", answer: "If you stop switching, a single infinite loop in one program would freeze the entire computer. We accept the overhead cost to buy **Responsiveness** and **Fairness**.", companies: ["Google"] }
        ]
    },
    '1.2-conc-states': {
        title: 'Process Lifecycle & The 5-State Model',
        visualizerType: 'process-states',

        oneLinerAnswer: "A process moves through New -> Ready -> Running -> Waiting -> Terminated during its life.",
        why: "The OS needs to organize processes based on what they are doing (using CPU vs waiting for Disk) to schedule efficiently.",
        tradeoffs: [
            "Granularity: Too many states (e.g., Suspended-Ready) add complexity but allow better memory management (swapping).",
            "Overhead: Moving processes between queues (State Transitions) requires checks and locks."
        ],
        failureCases: [
            "Infinite Waiting: A process waiting for an event that never happens (Deadlock).",
            "Thrashing: Too many processes in Ready/Running state causing rapid swapping."
        ],
        realWorldUsage: "Unix ps command (State codes: R, S, Z).",

        content: `### The Lifecycle of a Process
A process is a dynamic entity that moves through various states as it executes.

#### The 5 States
1.  **New**: The process is being created (fork() is called). PCB is allocated.
2.  **Ready**: The process is loaded in RAM and waiting for the CPU. It is in the **Ready Queue**.
3.  **Running**: The instructions are being executed by the CPU.
4.  **Waiting (Blocked)**: The process is waiting for some event (Disk I/O, User Input). It cannot run even if CPU is free.
5.  **Terminated**: The process has finished execution.

#### Transitions Visualized
*   **Running $\to$ Ready**: **Timer Interrupt**. Your time slice is up!
*   **Running $\to$ Waiting**: **System Call**. I need to read a file / sleep.
*   **Waiting $\to$ Ready**: **I/O Complete**. Disk has finished reading.
*   **New $\to$ Ready**: **Admitted**. The Long Term Scheduler allows entry.

> **Key Rule**: A process CANNOT go from **Waiting** directly to **Running**. It must go to the back of the Ready Queue first.`,
        code: {
            text: `State Diagram Logic:

[NEW] --admitted--> [READY] <---interrupt---- [RUNNING] --exit--> [TERMINATED]
                       |                         |
                       +----I/O completion--+    +--I/O wait--> [WAITING]`
        },
        interviewQuestions: [
            { question: "What is a 'Suspended' state?", answer: "When RAM is full, the OS might swap a Waiting process out to the Disk (Swap Space). This is 'Waiting Suspended'. It frees up RAM for active processes.", companies: ["Amazon"] },
            { question: "Can a process move from Ready to Waiting?", answer: "No. A process must be Running (on the CPU) to execute the instruction (scanf/read) that causes it to wait.", companies: ["Microsoft"] },
            { question: "What triggers the transition from Running to Ready?", answer: "A Timer Interrupt (Time Quantum expired) or a Higher Priority process arriving (Preemption).", companies: ["Google"] },
            { question: "Unique: Can a process exist without a PCB?", answer: "No. The PCB *is* the process definition to the OS. Without a PCB, the code is just data on a disk. The PCB breathes life into the code.", companies: ["Microsoft"] }
        ]
    },
    '1.2-ipc-shared': {
        title: 'IPC: Shared Memory',

        oneLinerAnswer: "The fastest IPC method where the OS maps the same physical memory pages into the virtual logic address space of two different processes.",
        why: "Copying data (Message Passing) is slow for large datasets (like Video frames). Sharing memory is zero-copy.",
        tradeoffs: [
            "Speed vs Safety: Extremely fast (memory speed) but dangerous (Race Conditions).",
            "Synchronization: OS provides no protection. Devs must use Semaphores manually."
        ],
        failureCases: [
            "Data Corruption: Two writes at the same time mix data.",
            "Security Leak: A buggy process reads secrets meant for another if access controls are weak."
        ],
        realWorldUsage: "Chrome (GPU Process to Render Process), High Frequency Trading.",

        content: `### Architecture: "The Community Garden"
Processes are usually isolated. Shared Memory breaks this by designating a specific region of RAM that **multiple processes can read/write**.
*   Process A gives access to Segment S.
*   Process B attaches Segment S to its address space.

### Pros & Cons
| Feature | Shared Memory |
| :--- | :--- |
| **Speed** | **Fastest IPC**. Zero-copy. It's just memory access. |
| **Kernel Involvement** | Only during setup. After that, Kernel is bypassed. |
| **Complexity** | **High**. Processes might write over each other. |
| **Sync** | **Manual**. You MUST use Semaphores/Locks. |

### Use Case
*   Large Data Transfer (Video Processing).
*   High Frequency Trading (Low latency).`,
        code: {
            c: `// POSIX Shared Memory
// 1. Create Object
int fd = shm_open("/mydata", O_CREAT | O_RDWR, 0666);
ftruncate(fd, 1024);

// 2. Map into my memory space
char *ptr = mmap(0, 1024, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);

// 3. Write
sprintf(ptr, "Hello from Process A!");`
        },
        interviewQuestions: [
            { question: "Why is Shared Memory faster than Pipes?", answer: "Pipes involve copying data from User A -> Kernel Buffer -> User B. Shared Memory involves NO copying. It involves mapping the same physical page to two logical addresses.", companies: ["HFT Firms"] },
            { question: "What is the biggest risk of Shared Memory?", answer: "Race Conditions. The OS does NOT synchronize access. Developers must manually use Semaphores/Locks to prevent data corruption.", companies: ["Cisco"] }
        ]
    },
    '1.2-ipc-msg': {
        title: 'IPC: Message Passing',

        oneLinerAnswer: "Processes communicate by sending data packets via the OS Kernel (send/receive syscalls), ensuring isolation.",
        why: "Shared memory is dangerous (race conditions). Message passing is slower but safer because the OS mediates every exchange.",
        tradeoffs: [
            "Safety vs Speed: No race conditions (OS handles it), but 2 memory copies per message (Slow).",
            "Simplicity: Easier to debug than shared memory."
        ],
        failureCases: [
            "Mailbox Full: Sender blocks if receiver is too slow (Backpressure).",
            "Lost Message: If the network/kernel buffer fails (rare in local IPC)."
        ],
        realWorldUsage: "MPI (Supercomputers), Mach (macOS Microkernel), Go Channels.",

        content: `### Architecture: "The Postal Service"
Processes interact by sending formatted messages via the OS Kernel.
*   **Primitives**: \`send(destination, message)\` and \`receive(source, message)\`.
*   **Kernel Role**: The OS takes the message from A, buffers it, and hands it to B.

### Pros & Cons
| Feature | Message Passing |
| :--- | :--- |
| **Speed** | Slower (2 Memory Copies: A->Kernel, Kernel->B). |
| **Kernel Involvement** | High (Every message is a System Call). |
| **Safety** | High. Processes are isolated. |
| **Sync** | Automatic (Receive blocks if empty). |

### Models
1.  **Direct**: \`send(P1, msg)\`. Explicit naming.
2.  **Indirect (Mailbox)**: \`send(MailboxA, msg)\`. Many processes can read MailboxA.`,
        code: {
            c: `// Mach/MPI Style
struct msg m;
m.id = 1;
m.text = "Hello";

// Trap to Kernel
msg_send(PROCESS_B, &m);`
        },
        interviewQuestions: [
            { question: "What IPC do Microkernels use?", answer: "Message Passing. Because subsystems (drivers, FS) are separate processes, they MUST use MP to talk. This is why Microkernels were historically slower.", companies: ["QNX"] },
            { question: "Blocking vs Non-Blocking Receive?", answer: "Blocking: Receiver waits until message arrives (Synchronous). Non-Blocking: Receiver checks buffer; if empty, returns immediately with error/null (Asynchronous).", companies: ["Amazon"] }
        ]
    },
    '1.2-ipc-mech': {
        title: 'IPC Mechanisms: Pipes & Signals',

        oneLinerAnswer: "Pipes: Unidirectional data stream (Producer -> Consumer). Signals: Software interrupts to notify process of events.",
        why: "Unix Philosophy: 'Write programs that do one thing well and work together'. Pipes connect them. Signals handle lifecycle (Ctrl+C).",
        tradeoffs: [
            "Simplicity vs Functionality: Pipes are simple byte streams (no message boundaries). Signals carry almost no data (just a number).",
            "Blocking: Reading from empty pipe blocks the process."
        ],
        failureCases: [
            "Broken Pipe (SIGPIPE): Writer writes to a pipe with no reader.",
            "Uncaught Signal: SIGKILL cannot be caught; app dies instantly without cleanup."
        ],
        realWorldUsage: "Bash ('|'), Ctrl+C (SIGINT).",

        content: `### 1. Pipes (Unidirectional Data Stream)
*   **Concept**: A producer writes to one end, a consumer reads from the other.
*   **Anonymous Pipe**: \`|\` in Shell. Only for related processes (Parent/Child). Dies with process.
*   **Named Pipe (FIFO)**: Exists as a file on disk. Any process can open it.

### 2. Signals (Software Interrupts)
*   **Concept**: A way to "poke" a process to tell it something happened.
*   **Handling**: A process can Ignore, Handle (catch), or Default (die) a signal.

#### Common Signals
| Signal | ID | Description |
| :--- | :--- | :--- |
| **SIGINT** | 2 | Interrupt (Ctrl+C). Polite kill. |
| **SIGKILL** | 9 | Force Kill. Cannot be caught/ignored. |
| **SIGSEGV** | 11 | Segmentation Fault (Bad Memory Access). |`,
        code: {
            bash: `# Unix Pipe Example
cat file.txt | grep "SearchTerm"
# 'cat' stdout is connected to 'grep' stdin via a kernel buffer (4KB).

# Sending a Signal
kill -9 1234 # Send SIGKILL to PID 1234`
        },
        interviewQuestions: [
            { question: "Can a process ignore SIGKILL?", answer: "No. SIGKILL and SIGSTOP cannot be caught, blocked, or ignored. They are handled directly by the Kernel to ensure a rogue process can always be terminated.", companies: ["Red Hat"] },
            { question: "Named Pipe vs Anonymous Pipe?", answer: "Anonymous: Exists only in RAM, connects parent/child. Named: Exists as a filesystem object, connects ANY two processes.", companies: ["Linux"] }
        ]
    },
    '1.2-sched-types': {
        title: 'Preemptive vs Non-Preemptive Scheduling',

        oneLinerAnswer: "Non-Preemptive: Process keeps CPU until it yields. Preemptive: OS forces CPU away after a time limit.",
        why: "Non-preemptive is simple but one loop hangs the logical system. Preemptive guarantees responsiveness.",
        tradeoffs: [
            "Responsiveness vs Complexity: Preemptive feels faster but requires complex locking for shared data.",
            "Overhead: Preemption involves frequent Context Switches."
        ],
        failureCases: [
            "Freeze (Non-Preemptive): User App hangs -> System hangs.",
            "Race Condition (Preemptive): Context switch happens in the middle of updating a variable."
        ],
        realWorldUsage: "Preemptive (Windows, Linux, macOS). Non-Preemptive (Windows 3.1, Arduino).",

        content: `### The Scheduler's Decision
The CPU Scheduler decides *who runs next*. The logic falls into two camps:

#### 1. Non-Preemptive (Cooperative)
*   **Rule**: Once a process gets the CPU, it keeps it until it **voluntarily** gives it up (Terminates or Waits for I/O).
*   **Pros**: Simple. No race conditions in kernel data.
*   **Cons**: **A Rogue Program can freeze the machine** (Infinite Loop).
*   **Era**: Windows 3.1, Classic Mac OS.

#### 2. Preemptive (Modern)
*   **Rule**: The OS specifies a "Time Slice". When time is up, the OS **forcibly** removes the CPU from the process.
*   **Mechanism**: Driven by the **Hardware Timer Interrupt**.
*   **Pros**: Responsiveness. No one hogs the CPU.
*   **Cons**: Complex. Needs synchronization for shared data.
*   **Era**: Windows 95+, Linux, macOS, Android.`,
        code: {
            python: `# Cooperative (You trust the coder)
def task():
    do_heavy_work()
    yield() # "I'm nice, I share"

# Preemptive (You trust no one)
# Hardware: *TICK* *TOCK* -> Interrupt -> OS takes control.`
        },
        interviewQuestions: [
            { question: "Which scheduling is used in Real-Time Systems?", answer: "Preemptive Priority Scheduling. When a high-priority task arrives, it must displace the current task IMMEDIATELY.", companies: ["Tesla"] },
            { question: "What is the Dispatcher?", answer: "The module that actually gives control of the CPU to the process selected by the Scheduler. It handles context switching and jumping to the proper location in the program.", companies: ["Intel"] }
        ]
    },
    '1.2-algo-fcfs': {
        title: 'First-Come First-Served (FCFS)',
        image: 'https://www.guru99.com/images/1/020919_0607_FirstComeFi1.png',

        oneLinerAnswer: "The simplest scheduling algorithm: Processes are executed in the order of arrival. Non-Preemptive.",
        why: "Baseline algorithm. Easy to implement (FIFO Queue).",
        tradeoffs: [
            "Simplicity vs Performance: Trivial logic, but terrible response time.",
            "Convoy Effect: One long CPU job blocks all short I/O jobs behind it."
        ],
        failureCases: [
            "System Lag: If a video render starts, you can't move the mouse until it finishes.",
            "Low Utilization: CPU is busy, I/O devices are idle."
        ],
        realWorldUsage: "Printer Spul queues, Batch systems.",

        content: `### The "Queue" Algorithm
*   **Logic**: Serves processes in the exact order they arrive.
*   **Type**: Non-Preemptive.

### The Convoy Effect (The Problem)
Imagine a grocery store with one checkout.
1.  **Person A** (CPU Bound): Has a full cart (Takes 10 mins).
2.  **Person B** (I/O Bound): Has one gum (Takes 10 secs).
Person B must wait 10 mins for Person A.
*   **Result**: Interactive performance is terrible. Average Waiting Time is high.

### Metrics
*   **Throughput**: Low.
*   **Fairness**: High (Order wise), Low (Time wise).`,
        code: {
            python: `tasks = [(P1, 24), (P2, 3), (P3, 3)]
# Order: P1, P2, P3
# Wait Times: P1=0, P2=24, P3=27.
# Avg Wait = (0+24+27)/3 = 17ms.`
        },
        interviewQuestions: [
            { question: "Is FCFS ever used in modern systems?", answer: "Yes, for background batch jobs (e.g., mail server queue) where interaction doesn't matter, or as a secondary tie-breaker in other algorithms.", companies: ["Cisco"] },
            { question: "What is the Convoy Effect?", answer: "When one CPU-bound process holds the CPU for a long time, causing many I/O-bound processes to wait in the Ready Queue, reducing I/O device utilization.", companies: ["Oracle"] }
        ]
    },
    '1.2-algo-sjf': {
        title: 'Shortest Job First (SJF) & SRTF',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Shortest_job_first.svg',

        oneLinerAnswer: "Selects the process with the shortest next CPU burst. Mathematically guarantees minimum average waiting time.",
        why: "To maximize throughput and minimize waiting. Best for batch jobs where runtimes are known.",
        tradeoffs: [
            "Optimality vs Fairness: Best avg wait time, but long jobs starve.",
            "Feasibility: Impossible to implement perfectly because we don't know the future burst length."
        ],
        failureCases: [
            "Starvation: A steady stream of short jobs means the long job never runs.",
            "Prediction Error: If we guess wrong (using exponential avg), performance drops."
        ],
        realWorldUsage: "General purpose scheduling (using heuristics/aging).",

        content: `### The "Speedy" Algorithm
*   **Logic**: Pick the process with the **Shortest Next CPU Burst**.
*   **Goal**: Minimize Average Waiting Time (Optimally).

#### Variations
1.  **SJF (Non-Preemptive)**: Once started, run to completion.
2.  **SRTF (Preemptive)**: If a new job arrives with a burst shorter than what's *left* of the current job, Switch!

### The Impossibility Problem
How do we know how long a job will take? We don't.
*   **Solution**: **Prediction**. We use *Exponential Averaging* of past behavior.
*   $\tau_{n+1} = \alpha t_n + (1-\alpha)\tau_n$
    *   $t_n$: Actual last burst.
    *   $\tau_n$: Predicted last burst.

### Cons
*   **Starvation**: If short jobs keep coming, long jobs never run.`,
        code: {
            python: `# Prediction Logic
alpha = 0.5
last_predicted = 10
last_actual = 6
new_prediction = (0.5 * 6) + (0.5 * 10) # 8`
        },
        interviewQuestions: [
            { question: "Why is SRTF optimal?", answer: "It is a greedy algorithm that always reduces the number of waiting processes as fast as possible, mathematically yielding the lowest average wait time.", companies: ["Google"] },
            { question: "What happens if a short process arrives in SJF?", answer: "In non-preemptive SJF, nothing (it waits). In SRTF (Preemptive SJF), the current long process is stopped to run the new short one.", companies: ["Microsoft"] }
        ]
    },
    '1.2-algo-rr': {
        title: 'Round Robin (RR)',
        image: 'https://www.guru99.com/images/1/020919_0738_RoundRobinS2.png',

        oneLinerAnswer: "Preemptive FCFS with a Time Quantum. Each process gets a small slice of CPU time, then moves to back of queue.",
        why: "To provide fairness and responsiveness in Time Sharing systems.",
        tradeoffs: [
            "Fairness vs Overhead: Too small Quantum = High switching overhead. Too large = FCFS.",
            "Response Time: Guaranteed upper bound on wait."
        ],
        failureCases: [
            "Thrashing: If Quantum is tiny (e.g., 1ms), CPU spends 50% time switching.",
            "Degradation: If Quantum is huge, it lags like FCFS."
        ],
        realWorldUsage: "Standard for time-sharing systems.",

        content: `### The "Fair" Algorithm
*   **Logic**: Give everyone a customized slice of time (**Time Quantum** $q$).
*   **Type**: Preemptive.
*   **Structure**: The Ready Queue is a Circular FIFO.

### The Role of Quantum ($q$)
*   **If $q$ is too large**: Becomes **FCFS**. (Unresponsive).
*   **If $q$ is too small**: **Context Switch Overhead** dominates. CPU spends all time switching, not working.
*   **Sweet Spot**: 10ms - 100ms. $q$ should be large enough that 80% of bursts finish in one go.

### Pros & Cons
| Feature | Round Robin |
| :--- | :--- |
| **Response Time** | **Excellent**. No one waits more than $(N-1)q$. |
| **Throughput** | Lower (due to switching overhead). |
| **Fairness** | **Perfect**. Everyone gets equal share. |`,
        code: {
            c: `// Round Robin Pseudo
while(!empty(queue)) {
    p = dequeue();
    run(p, Quantum);
    if (!finished(p)) {
        enqueue(p); // Back of the line!
    }
}`
        },
        interviewQuestions: [
            { question: "What is the worst case wait time for a process in RR?", answer: "If there are N processes and quantum is q, you wait at most (N-1)*q time units before you get the CPU again.", companies: ["Uber"] },
            { question: "How does Time Quantum affect performance?", answer: "Small Q = High overhead (context switching). Large Q = Degrades to FCFS (poor response time). Rule of thumb: 80% of CPU bursts should be shorter than Q.", companies: ["Netflix"] },
            { question: "Unique: Why don't we dynamically adjust the Time Quantum?", answer: "We DO! Modern schedulers (Linux CFS) use dynamic slices based on 'Nice' values and interactivity. A static Quantum is just a textbook simplification.", companies: ["Linux Kernel Team"] }
        ]
    },
    '1.2-algo-priority': {
        title: 'Priority Scheduling & Multilevel Queue',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220525160911/PriorityScheduling.jpg',

        oneLinerAnswer: "Assigns CPU based on rank (Priority). Multilevel Queues segregate jobs (System vs User) with different rules.",
        why: "Some tasks (Kernel, UI) are more important than others (Background indexing).",
        tradeoffs: [
            "Responsiveness vs Starvation: Low priority jobs might never run.",
            "Complexity: Need mechanisms like Aging to fix starvation."
        ],
        failureCases: [
            "Infinite Blocking: A low priority job waits forever.",
            "Priority Inversion: High priority job blocked by low priority job holding a lock."
        ],
        realWorldUsage: "Linux Scheduler (CFS), Windows Priority Classes.",

        content: `### Rank-Based Scheduling
*   **Logic**: CPU is allocated to the process with the highest priority.
*   **Internally**: Priority is an integer (e.g., 0 = High, 4096 = Low).

### Problem: Starvation
A stream of high-priority processes can prevent a low-priority process from *ever* running (Infinite Blocking).
*   *Story*: When MIT shut down their mainframe in 1973, they found a low-priority process from 1967 that had never run.

### Solution: Aging
Gradually increase the priority of a process that waits for a long time.
*   "If wait > 15 mins, Priority++". Eventually, it becomes highest.

### Multilevel Queue (MLQ)
Different classes of jobs need different rules.
1.  **System Processes**: Highest Priority (RR).
2.  **Interactive Users**: Medium Priority (RR).
3.  **Batch Jobs**: Low Priority (FCFS).`,
        code: {
            python: `# Aging Implementation
for task in ready_queue:
    task.wait_time += 1
    if task.wait_time > AGE_THRESHOLD:
        task.priority += 1 # Bump it up!`
        },
        interviewQuestions: [
            { question: "What is Priority Inversion?", answer: "A high priority task waits for a lock held by a low priority task. The low priority task is preempted by a medium task. Result: High priority task waits for Medium task (Inversion). Solved by Priority Inheritance.", companies: ["Nvidia"] },
            { question: "Starvation vs Deadlock?", answer: "Starvation: You *might* get the resource eventually (e.g. low priority). Deadlock: You will *never* get the resource because of a circular wait.", companies: ["Amazon"] }
        ]
    },
    '1.2-thread-diff': {
        title: 'Process vs Thread',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230627115858/Process-vs-Thread.png',

        oneLinerAnswer: "A Process is an isolated execution environment (Heavyweight); a Thread is a unit of execution within a process that shares memory (Lightweight).",
        why: "Creating processes is expensive (duplicating memory). Threads allow parallelism without the memory overhead.",
        tradeoffs: [
            "Isolation vs Speed: Processes are safe (one crash doesn't kill others) but slow to communicate. Threads are fast but share failure.",
            "Complexity: Threads require synchronization (Locks) to prevent data corruption."
        ],
        failureCases: [
            "Race Condition: Threads modify shared data simultaneously.",
            "Deadlock: Threads wait on each other forever."
        ],
        realWorldUsage: "Chrome Tabs (Processes), Web Server handling requests (Threads).",

        content: `### Definitions
*   **Process**: A program in execution. Heavyweight. Has a separate memory space.
*   **Thread**: A "Lightweight Process". A unit of execution *within* a process.

### What is Shared? (The Thread DNA)
Threads belong to the same process, so they share the "House":
*   **Code Section** (Instructions).
*   **Data Section** (Global Variables).
*   **Open Files** (Descriptors).
*   **Heap** (Dynamic Memory).

### What is Private? (The Thread Room)
To run independently, each thread needs:
*   **Program Counter (PC)** (Where am I?).
*   **Registers** (Scratchpad).
*   **Stack** (Local variables, function calls).

| Feature | Process | Thread |
| :--- | :--- | :--- |
| Creation | Expensive (Duplicate Memory) | Cheap (Share Memory) |
| Communication | Difficult (IPC) | Easy (Shared Variables) |
| Isolation | High (Crash is contained) | Low (One crash kills all) |`,
        code: {
            c: `// Shared Global Variable
int x = 10;

void* worker(void* arg) {
x = 20; // Changed for EVERY thread!
}

int main() {
pthread_t t1, t2;
pthread_create(&t1, NULL, worker, NULL);
}`
        },
        interviewQuestions: [
            { question: "Why does Chrome use Process-per-Tab instead of Threads?", answer: "Isolation. If a tab crashes (bad JS), we don't want the whole browser to close. Processes isolate the crash. Also, security (Sandboxing).", companies: ["Google"] },
            { question: "Do threads share Stack memory?", answer: "No. Each thread must have its own Stack to maintain its own sequence of function calls and local variables.", companies: ["Microsoft"] }
        ],
    },
    '1.2-thread-worker': {
        title: 'User vs Kernel Threads',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20210323143329/UserLevelThreadVsKernelLevelThread.png',

        oneLinerAnswer: "User Threads are managed by libraries in user-space (Fast, but blocking); Kernel Threads are managed by the OS (Slower, but true concurrency).",
        why: "To achieve concurrency. Early systems didn't have kernel support, so we used User Threads (Green Threads).",
        tradeoffs: [
            "Performance vs Blocking: User threads switch fast but if one blocks (I/O), all block. Kernel threads handle blocking fine but switch slow.",
            "Utilization: Only Kernel threads can run on different CPU cores simultaneously."
        ],
        failureCases: [
            "Process Blocking: A user-level thread calls read(), freezing the entire process.",
            "Resource Limit: Creating 100k Kernel threads crashes the OS (OOM)."
        ],
        realWorldUsage: "Java 1.0 (User), Java Current (Kernel), Go Routines (Hybrid).",

        content: `### User Threads (Green Threads)
Threads managed by a user-level library (e.g., old Java, Go). The OS Kernel **knows nothing about them**.
*   **Pros**: Ultra-fast switching (Function call). Custom scheduling.
*   **Cons**: **Blocking Problem**. If one user thread calls a blocking System Call (read disk), the OS blocks the *entire process*, pausing all other user threads.

### Kernel Threads
Threads managed directly by the OS (Windows, Linux, macOS).
*   **Pros**: **True Concurrency**. If one thread blocks, OS schedules another. SMP (Multi-core) support.
*   **Cons**: Slower. Creation/Switching involves System Calls.

### Comparison
| Feature | User Thread | Kernel Thread |
| :--- | :--- | :--- |
| **Manager** | Library (Runtime) | OS Kernel |
| **Speed** | Fast | Slower |
| **Parallelism**| None (Time sliced on 1 core) | True (Multiple cores) |`,
        code: {
            text: `History:
Java 1.1 used Green Threads (User).
Java 1.2+ uses Native Threads (Kernel) to leverage Multi-Core CPUs.`
        },
        interviewQuestions: [
            { question: "What is the primary drawback of User Level Threads?", answer: "They cannot utilize Multicore Processors. Since the Kernel sees only 1 process, it schedules it on 1 Core.", companies: ["Amazon"] },
            { question: "If a User Level Thread blocks, what happens?", answer: "The entire process blocks. The Kernel doesn't know there are other threads ready to run.", companies: ["Oracle"] },
            { question: "Unique: Can we have concurrency without parallelism?", answer: "Yes! A single-core CPU running a Node.js event loop is Concurrent (handling multiple tasks) but NOT Parallel (executing instructions simultaneously).", companies: ["Node.js"] }
        ]
    },
    '1.2-thread-models': {
        title: 'Multithreading Models',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20190508000412/threads2.png',

        oneLinerAnswer: "Describes how User Threads map to Kernel Threads: Many-to-One (Green), One-to-One (Native), or Many-to-Many (Hybrid).",
        why: "To balance the lightweight nature of user threads with the parallelism of kernel threads.",
        tradeoffs: [
            "1:1: Simple and multicore-capable, but heavy kernel resource usage.",
            "M:N: Best performance (lightweight + multicore) but extremely complex to implement."
        ],
        failureCases: [
            "Scheduler Complexity: M:N schedulers often have bugs or high overhead (Solaris abandoned it).",
            "Thread Explosion: 1:1 model fails if you spawn 1 million threads."
        ],
        realWorldUsage: "Linux/Windows (1:1), Go/Erlang (M:N).",

        content: `### Mapping User $\to$ Kernel
How do we connect the threads we write (User) to the threads the CPU runs (Kernel)?

#### 1. Many-to-One Model
*   Many User Threads $\to$ 1 Kernel Thread.
*   **Analysis**: Efficient, but limited. No Parallelism. Block one = Block all.
*   *Ex*: Solaris Green Threads.

#### 2. One-to-One Model (The Industry Standard)
*   1 User Thread $\to$ 1 Kernel Thread.
*   **Analysis**: Best Concurrency. Slightly heavier weight.
*   *Ex*: Windows, Linux, modern Java.

#### 3. Many-to-Many Model
*   $M$ User Threads $\to$ $N$ Kernel Threads ($M > N$).
*   **Analysis**: Best of both worlds? Complex to implement.
*   *Ex*: Go Language (Goroutines). Go runtime multiplexes thousands of routines onto a few OS threads.`,
        code: {
            go: `// Go Logic (M:N)
// You can spawn 100k Goroutines.
// The Go Scheduler maps them to only 8 OS Threads (on an 8-core machine).
go func() { ... }`
        },
        interviewQuestions: [
            { question: "Why did Linux reject the M:N model?", answer: "Complexity. The scheduler implementation became too convoluted. With modern hardware, 1:1 is fast enough and much simpler to debug.", companies: ["Red Hat"] },
            { question: "How does GoLang handle concurrency?", answer: "Go uses M:N. It multiplexes thousands of lightweight 'Goroutines' (User space) onto a few OS threads. If a goroutine blocks, the runtime moves others to a different thread.", companies: ["Google"] }
        ]
    },
    '1.2-sync-race': {
        title: 'Race Conditions & The Critical Section',

        oneLinerAnswer: "A bug where the output depends on the timing of other uncontrollable events (threads). Solved by Critical Sections.",
        why: "Threads share memory. If two threads write to 'counter' at the same time, one write is lost.",
        tradeoffs: [
            "Correctness vs Performance: Locking prevents races but serializes execution (slower).",
            "Granularity: Fine-grained locks are fast but complex. Coarse locks are simple but slow."
        ],
        failureCases: [
            "Bank Error: Two withdrawals happen at once, checking balance before either deducts.",
            "Therac-25: A race condition in a medical device killed patients with radiation."
        ],
        realWorldUsage: "Every multithreaded app (Banking, Games).",

        content: `### The Race Condition
A situation where multiple processes access and manipulate shared data concurrently, and the final value depends on the *timing* of execution.
*   **Example**: \`count++\`. This looks atomic, but in Assembly, it is 3 instructions:
    1.  MOVE AX, count
    2.  ADD AX, 1
    3.  MOVE count, AX
*   If a Context Switch happens after Step 1, data corruption occurs.

### Critical Section (CS)
The segment of code where the shared resource is accessed.
**Solution Requirements**:
1.  **Mutual Exclusion**: If Process A is in CS, no other process can be in CS.
2.  **Progress**: If CS is empty, some process wanting to enter should be allowed.
3.  **Bounded Waiting**: A process shouldn't wait forever to enter CS.`,
        code: {
            c: `// Race Condition Example
int balance = 100;

void withdraw(int amount) {
    // Context switch here could crash the bank!
    if (balance >= amount) {
balance -= amount; 
    }
}`
        },
        interviewQuestions: [
            { question: "Threads vs Processes?", answer: "Process: Isolated memory, Heavyweight. Thread: Shared memory, Lightweight. Context switch is faster for threads.", companies: ["Google", "Microsoft"] },
            { question: "What is a Zombie Process?", answer: "A process that has finished execution but its entry is still in the process table to allow the parent to read the exit status. It is dead but not reaped.", companies: ["Adobe", "Red Hat"] },
            { question: "Is int x = 5 atomic?", answer: "Usually yes, if it is word-aligned. But 'x++' is NEVER atomic.", companies: ["Microsoft"] }
        ]
    },
    '1.2-sol-sem': {
        title: 'Semaphores',

        oneLinerAnswer: "An integer variable used for signaling between processes. Two operations: Wait (Decrement) and Signal (Increment).",
        why: "We need a primitive to coordinate processes (e.g., 'Stop until I finish').",
        tradeoffs: [
            "Flexibility vs Danger: Very powerful, but unstructured. Easy to cause Deadlock.",
            "Mutex vs Semaphore: Mutex has ownership (only owner unlocks), Semaphore does not."
        ],
        failureCases: [
            "Deadlock: Waiting on a semaphore that never gets signaled.",
            "Priority Inversion: High priority task waits for low priority task."
        ],
        realWorldUsage: "Driver synchronization, Producer-Consumer queues.",

        content: `### The Universal Key
A Semaphore $S$ is an integer variable accessed only via two atomic operations:
1.  **wait(S)** (or *P*): Decrements S. If $S < 0$, block.
2.  **signal(S)** (or *V*): Increments S. Wakes up a blocked process.

#### Types
*   **Binary Semaphore (Mutex)**: Value is 0 or 1. Functions like a Lock.
*   **Counting Semaphore**: Value is $N$. Used to manage a pool of $N$ resources (e.g., 5 Printers).

#### How it works
*   **Enter**: \`wait(mutex)\`. (Lock the door).
*   **Critical Section**: Do safe work.
*   **Exit**: \`signal(mutex)\`. (Unlock the door).`,
        code: {
            c: `sem_t mutex;
sem_init(&mutex, 0, 1);

void safe_function() {
    sem_wait(&mutex);
    // Critical Section
    sem_post(&mutex);
}`
        },
        interviewQuestions: [
            { question: "Difference between Mutex and Semaphore?", answer: "Ownership. A Mutex is 'owned' by the thread that locked it (only that thread can unlock). A Semaphore is a signal; any thread can signal it.", companies: ["Cisco"] },
            { question: "What is a Binary Semaphore?", answer: "A semaphore that can only take values 0 or 1. It is mathematically equivalent to a Mutex but without the ownership property.", companies: ["Adobe"] }
        ]
    },
    '1.2-sol-mon': {
        title: 'Monitors',

        oneLinerAnswer: "A high-level synchronization construct (Class) that enforces mutual exclusion automatically on its methods.",
        why: "Semaphores are easy to mess up (forgetting `signal`). Monitors move the locking logic into the language/compiler.",
        tradeoffs: [
            "Safety vs Control: Harder to make mistakes, but less flexible than raw semaphores.",
            "Performance: Often implemented with heavyweight locks."
        ],
        failureCases: [
            "Nested Monitor Lockout: Calling a blocking function inside a monitor can deadlock.",
            "Lost Signal: Implementing Wait/Notify incorrectly in Java."
        ],
        realWorldUsage: "Java `synchronized`, C# `lock`.",

        content: `### High-Level Synchronization
Semaphores are hard. If you forget a \`signal()\`, the system hangs.
**Monitors** are a language-level construct (used in Java/C#) to make sync easy.

#### Features
*   **Automatic Mutual Exclusion**: Only one thread can execute a method inside a Monitor at a time.
*   **Condition Variables**: \`wait()\` and \`notify()\` to coordinate threads inside the monitor.

#### Java Implementation
The \`synchronized\` keyword turns a class/method into a Monitor.`,
        code: {
            java: `class Counter {
    private int count = 0;
    
    // Only one thread enters at a time
    public synchronized void increment() {
count++;
    }
}`
        },
        interviewQuestions: [
            { question: "What is the difference between wait() and sleep()?", answer: "sleep() keeps the lock. wait() releases the lock and allows other threads to enter the monitor.", companies: ["Java"] },
            { question: "What is a Condition Variable?", answer: "A container for threads that form a queue waiting for a specific condition. Used inside Monitors with wait()/notify().", companies: ["Microsoft"] }
        ]
    },
    '1.2-prob-prod': {
        title: 'Producer-Consumer Problem',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/producer_consumer.png',

        oneLinerAnswer: "A classic sync problem where a Producer adds to a buffer and Consumer removes, requiring coordination on Full/Empty states.",
        why: "To decouple systems. Ideally, the Producer produces at its own pace, and Consumer consumes at its own pace.",
        tradeoffs: [
            "Buffer Size: Large buffer absorbs spikes but is memory heavy. Small buffer blocks frequently.",
            "Complexity: Needs 3 semaphores (Mutex, Empty, Full) to solve correctly."
        ],
        failureCases: [
            "Buffer Overflow: Producer writes when full (data loss).",
            "Deadlock: Improper ordering of `wait` calls."
        ],
        realWorldUsage: "YouTube (Server produces video chunks, Browser consumes/plays).",

        content: `### The Bounded Buffer Problem
Classic synchronization challenge.
*   **Producer**: Generates data -> Buffer. Blocks if Buffer FULL.
*   **Consumer**: Takes data <- Buffer. Blocks if Buffer EMPTY.

### Solution with Semaphores
We need 3 semaphores:
1.  **Mutex (1)**: Protects buffer access.
2.  **Empty (N)**: Counts empty slots. (Producer waits on this).
3.  **Full (0)**: Counts full slots. (Consumer waits on this).`,
        code: {
            c: `// Producer Code
wait(empty); // Wait for space
wait(mutex); // Lock
buffer.push(item);
signal(mutex); // Unlock
signal(full); // Tell Consumer "Here is 1 item"`
        },
        interviewQuestions: [
            { question: "Why the order of wait() matters?", answer: "If you wait(mutex) BEFORE wait(empty), you might lock the buffer and THEN sleep waiting for space. The consumer can't empty the buffer because you hold the lock -> Deadlock.", companies: ["Amazon"] },
            { question: "How to solve Producer-Consumer without Semaphores?", answer: "Use a Monitor (Java 'synchronized') or Message Passing (Go Channels).", companies: ["Google"] }
        ],
    },
    '1.2-prob-read': {
        title: 'Readers-Writers Problem',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/readers-writers-problem-1.png',

        oneLinerAnswer: "Managing access to a database where multiple Readers can access concurrently, but Writers need exclusive access.",
        why: "Optimizing for reads. If we used a simple Mutex, only 1 reader could read at a time (Slow).",
        tradeoffs: [
            "Read vs Write Preference: Favoring readers starves writers. Favoring writers starves readers.",
            "Throughput vs Fairness: Allowing concurrent reads boosts throughput massively."
        ],
        failureCases: [
            "Writer Starvation: Valid updates never happen because people keep reading.",
            "Data Inconsistency: Reader reads half-written data (if locking fails)."
        ],
        realWorldUsage: "Wikipedia (Millions of reads, few edits), Database locking.",

        content: `### The Database Challenge
*   **Scenario**: Many processes access a shared database.
*   **Readers**: Want to read. Multiple readers can read simultaneously.
*   **Writers**: Want to write. Writers need **Exclusive Access** (No readers, no other writers).

### Case 1: Readers Preference
If a Reader is reading, other Readers can join. Writers must wait until **ALL** readers are gone.
*   **Problem**: **Writer Starvation**. If readers keep coming, the Writer waits forever.

### Case 2: Writers Preference
If a Writer wants to write, no new Readers can start.
*   **Problem**: Reader Starvation.`,
        code: {
            c: `// Reader Entry
lock(mutex);
read_count++;
if (read_count == 1) wait(wrt); // First reader locks out writer
unlock(mutex);`
        },
        interviewQuestions: [
            { question: "How to solve Starvation here?", answer: "Use a Fair Lock (FIFO). Requests are served in arrival order, regardless of type.", companies: ["Oracle"] },
            { question: "Reader-Writer Lock vs Normal Lock?", answer: "RWLock allows multiple readers OR one writer. Normal Lock allows only ONE thread (Reader or Writer). RWLock is better for read-heavy workloads.", companies: ["Facebook"] }
        ],
    },
    '1.2-prob-dine': {
        title: 'Dining Philosophers Problem',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/dining_philosopher_problem.png',

        oneLinerAnswer: "A model for Deadlock where 5 processes need 2 shared resources (forks) to proceed, leading to a circular wait.",
        why: "To visualize resource contention and deadlock conditions in a system with multiple shared resources.",
        tradeoffs: [
            "Resource Utilization vs Deadlock Freedom: Restricting access (Chaperone) prevents deadlock but lowers parallelism.",
            "Fairness: A solution detecting deadlock might starve one philosopher."
        ],
        failureCases: [
            "Deadlock: Everyone picks up left fork, waits for right forever.",
            "Starvation: Two fast philosophers keep eating, middle one never gets forks."
        ],
        realWorldUsage: "Database transaction locking hierarchies.",

        content: `### The Deadlock Trap
5 Philosophers. 5 Chopsticks. Needs 2 to eat.
*   **Scenario**: Everyone picks up Left stick. Everyone waits for Right stick.
*   **Result**: Deadlock.

### Solutions
1.  **Resource Hierarchy**: Number chopsticks 1-5. Always pick up smaller number first. (Breaks Circular Wait).
2.  **Monitor Solution**: Only pick up sticks if BOTH are available. To do this, check atomic state.
3.  **Chaperone**: Limit table to 4 philosophers.`,
        code: {
            c: `// Hierarchy Solution
void phil(int i) {
int first = min(i, (i+1)%5);
int second = max(i, (i+1)%5);
wait(stick[first]);
wait(stick[second]);
eat();
}`
        },
        interviewQuestions: [
            { question: "What condition of Deadlock does the Hierarchy solution break?", answer: "Circular Wait. By forcing an order, a cycle cannot form.", companies: ["Google"] },
            { question: "Why can't we just pick up both chopsticks at once?", answer: "That requires atomic hardware support for 'Pick Up Two'. Standard locking is one-by-one. Monitors can simulate 'Pick Up Two' atomically.", companies: ["Intel"] }
        ],
    },
    // 1.3 Deadlocks
    '1.3-intro': {
        title: 'Deadlock Introduction',

        oneLinerAnswer: "A standstill condition where a set of processes are blocked because each is holding a resource and waiting for another acquired by some other process.",
        why: "Occurs when we have non-sharable resources and independent processes. It's the ultimate 'Gridlock'.",
        tradeoffs: [
            "Prevention vs Performance: Preventing deadlock (e.g. holding all resources at start) is extremely inefficient.",
            "Detection vs Overhead: Checking for deadlock constantly burns CPU."
        ],
        failureCases: [
            "System Halt: Server stops responding entirely.",
            "Cascading Failure: One deadlocked service causes timeouts in dependent services."
        ],
        realWorldUsage: "Database transactions, Traffic intersections.",

        content: `### The Standoff
A set of processes is deadlocked if each process in the set is waiting for an event (resource release) that only another process in the set can cause.
*   **Analogy**: Traffic Gridlock. Four cars at an intersection, each blocking the other.

#### The 4 Coffman Conditions (Necessary for Deadlock)
Deadlock can arise ONLY if ALL 4 hold simultaneously:
1.  **Mutual Exclusion**: At least one resource is non-sharable (e.g., Printer).
2.  **Hold and Wait**: A process holding resources keeps asking for more without releasing.
3.  **No Preemption**: A resource cannot be forcibly taken away.
4.  **Circular Wait**: $P_0 \to P_1 \to P_2 \to P_0$. A chain of waiting.`,
        code: {
            text: `Resource Allocation Graph:
If the graph has a cycle AND resources have single instances -> DEADLOCK.
If graph has cycle BUT resources have multiple instances -> MAYBE Deadlock.`
        },
        interviewQuestions: [
            { question: "If I break one condition, is deadlock impossible?", answer: "Yes. Breaking any ONE of the four conditions is sufficient to prevent deadlock completely.", companies: ["Microsoft"] },
            { question: "What is a Resource Allocation Graph?", answer: "A directed graph where nodes are Processes/Resources and edges are Requests/Assignments. A cycle in this graph (with single-instance resources) implies Deadlock.", companies: ["Uber"] },
            { question: "Unique: Can Deadlock occur with only 1 Process?", answer: "Yes! If a process holds a non-recursive lock and tries to lock it again (Self-Deadlock).", companies: ["Google"] }
        ]
    },
    '1.3-handle-prev': {
        title: 'Deadlock Prevention',

        oneLinerAnswer: "Structuring the system to ensure at least one of the 4 Deadlock conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait) effectively never holds.",
        why: "It's better to design a system where deadlock is mathematically impossible than to recover from it later.",
        tradeoffs: [
            "Flexibility vs Safety: Preventing 'Hold and Wait' means asking for all resources (Printer + Disk + Network) at startup, which lowers utilization.",
            "Feasibility: Some conditions (Mutual Exclusion) cannot be broken (you can't share a printer simultaneously)."
        ],
        failureCases: [
            "Starvation: The prevention protocol (e.g. strict ordering) might permanently deny resources to a specific process.",
            "Resource Waste: Allocating resources early just to be safe."
        ],
        realWorldUsage: "Ordering locks (A->B->C) in database code to prevent cycles.",

        content: `### Break the Conditions
We design the system so that one of the 4 conditions is **impossible**.

1.  **No Mutual Exclusion**: Make everything shareable? Impossible (Printers).
2.  **No Hold and Wait**:
    *   *Protocol*: Process must request ALL resources at start.
    *   *Problem*: Low utilization. Starvation.
3.  **No Preemption**:
    *   *Protocol*: If I ask for something and can't get it, I must release what I have.
    *   *Problem*: Cannot do this for Tape Drives / Writers.
4.  **No Circular Wait**:
    *   *Protocol*: Order resources ($R_1, R_2, ...$). Must request in increasing order.
    *   *Verdict*: The most practical solution.`,
        code: {
            c: `// Preventing Circular Wait
// Rule: Always lock mutex A before mutex B.
lock(mutex_A);
lock(mutex_B);
// Using this rule everywhere guarantees no cycle.`
        },
        interviewQuestions: [
            { question: "Why is 'Hold and Wait' prevention bad?", answer: "It requires knowing all future needs at the start (hard to predict) and holds resources for the entire duration even if used only at the end (wasteful).", companies: ["IBM"] },
            { question: "Can Spooling cause Deadlock?", answer: "Yes. If the disk space fills up with half-completed jobs, no new job can start, and no running job can finish printing. This is why spool directories are huge.", companies: ["Mainframe Era"] }
        ]
    },
    '1.3-handle-avoid': {
        title: 'Deadlock Avoidance',

        oneLinerAnswer: "The OS inspects every resource request dynamically and only grants it if the system remains in a 'Safe State'. Example: Banker's Algorithm.",
        why: "Prevention is too strict (lowers utilization). Avoidance allows more flexibility but requires runtime checks.",
        tradeoffs: [
            "Overhead: Running the Banker's Algorithm (O(N^2)) on every malloc() is too slow for real OSs.",
            "Knowledge: Requires knowing the 'Max Need' of every process in advance, which is impossible in general purpose computing."
        ],
        failureCases: [
            "Unsafe State: If the OS guesses wrong or a process lies about its max need, deadlock occurs.",
            "Performance degradation: High CPU usage due to constant state checking."
        ],
        realWorldUsage: "Not used in general OS. Used in specialized embedded systems or database allocators.",

        content: `### The Banker's Algorithm
Instead of restricting the system (Prevention), we let the system run but **check every request**.
*   **Logic**: Before granting a request, simulate: "If I give you this, will the system remain in a **SAFE STATE**?"
*   **Safe State**: There exists a sequence $\langle P_1, P_2, ... \rangle$ such that everyone can finish.

#### Data Structures
*   **Available**: Free resources.
*   **Max**: Demand of each process.
*   **Allocation**: Current holdings.
*   **Need**: $Max - Allocation$.

> "I will lend you money only if I know that even in the worst case, I can get it back."`,
        code: {
            python: `def request_resources(proc, request):
    if request > available: return False
    # Pretend to allocate
    available -= request
    allocation[proc] += request
    if is_safe_state():
        return True # Grant
    else:
        rollback()
        return False # Deny`
        },
        interviewQuestions: [
            { question: "Complexity of Banker's Algorithm?", answer: "O(N^2 * M) where N is processes and M is resource types. It is too slow for modern OS schedulers to run on every allocation.", companies: ["Google"] },
            { question: "What is a Safe Sequence?", answer: "A specific ordering of processes <P1, P5, P2...> such that if executed in this order, everyone completes. If NO safe sequence exists, the system is Unsafe (Danger of Deadlock).", companies: ["Microsoft"] }
        ]
    },
    '1.3-handle-detect': {
        title: 'Deadlock Detection & Recovery',

        oneLinerAnswer: "Allow deadlock to happen, periodically run an algorithm (Cycle Detection) to find it, and recover by killing processes.",
        why: "If deadlocks are rare (e.g. once a year), it's cheaper to fix them when they break than to enable expensive prevention mechanisms.",
        tradeoffs: [
            "User Experience: Recovery usually means killing a process (losing work).",
            "Ostrich Approach: Most OSs just ignore the problem. If it hangs, user reboots."
        ],
        failureCases: [
            "Cascading Terminaton: Killing one process might leave a file corrupted, causing the next process to crash.",
            "Detection Lag: The system remains frozen until the detector runs (e.g., every minute)."
        ],
        realWorldUsage: "Database Deadlock Detectors, Windows/Linux (Ostrich Algorithm).",

        content: `### Let it Crash
If we don't prevent or avoid, Deadlock might happen.
1.  **Detection**: Run an algorithm (similar to Banker's) periodically to check for cycles / unsafe state.
2.  **Recovery**:
    *   **Process Termination**: Kill the process in the cycle.
        *   *Kill All*: Drastic.
        *   *Kill One*: Kill one, re-run detection. (Repeat).
    *   **Resource Preemption**: Take resource back (Rollback process).

> **Ostrich Algorithm**: Just ignore it. Assume deadlock almost never happens. (Used by Unix/Windows). Reboot if it happens.`,
        code: {
            bash: `# Admin Detection
top # Look for processes stuck in 'D' state (Uninterruptible Sleep)
kill -9 <PID>`
        },
        interviewQuestions: [
            { question: "Why do Windows/Linux use the Ostrich Algorithm?", answer: "Cost vs Benefit. Deadlocks are rare in well-written software. Running detection algorithms (O(N^2)) constantly consumes huge CPU. It's cheaper to let the user reboot once a year.", companies: ["Microsoft"] },
            { question: "How to recover from Deadlock?", answer: "1. Abort all deadlocked processes. 2. Abort one at a time until cycle breaks. 3. Preempt resources (take them away). Approach 2 is most common but slow.", companies: ["AWS"] }
        ]
    },
    // 1.4 Memory Management
    '1.4-addr': {
        title: 'Address Binding & MMU',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/MMU_principle_updated.png/800px-MMU_principle_updated.png',

        oneLinerAnswer: "The Memory Management Unit (MMU) is hardware that translates Logical Addresses (CPU view) to Physical Addresses (RAM view) at runtime.",
        why: "We want every program to think it starts at address 0 and owns the memory, without worrying about other programs.",
        tradeoffs: [
            "Speed: Translation happens on every instruction fetch. Must be ultra-fast.",
            "Flexibility: Execution-time binding allows code to be moved in RAM without crashing."
        ],
        failureCases: [
            "Segfault: CPU generates address outside the limit; MMU raises exception.",
            "Fragmentation: If we use simple value mapping, we need contiguous physical RAM (hard)."
        ],
        realWorldUsage: "Every modern CPU (x86 CR3 register).",

        content: `### The Magic of Addresses
A program on disk sees addresses $0$ to $N$. When loaded, it sits at physical address $5000$.
*   **Logical Address (Virtual)**: Generated by CPU.
*   **Physical Address**: Seen by Memory Unit (RAM).

#### The MMU (Memory Management Unit)
A hardware chip that maps Logical $\to$ Physical at runtime.
*   **Relocation Register**: Base address (e.g., 14000).
*   **Mapping**: $Physical = Logical + Relocation$.
*   **Benefit**: Protection. User program cannot generate an address outside its limit.`,
        code: {
            asm: `; CPU generates address 100
MOV EAX, [100] 
; MMU sees Base=5000.
; Sends request to RAM for Address 5100.`
        },
        interviewQuestions: [
            { question: "Compile Time vs Load Time vs Execution Time binding?", answer: "Compile: Hardcoded absolute address (MS-DOS). Load: Relocatable code. Execution: Dynamic mapping (Modern OS). Only Execution time allows moving code during runtime.", companies: ["Intel"] },
            { question: "What is the function of the Relocation Register?", answer: "It holds the physical base address. The MMU adds this value to every logical address generated by the CPU to get the physical address.", companies: ["AMD"] }
        ]
    },
    '1.4-frag': {
        title: 'Fragmentation',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fragmentation.svg/800px-Fragmentation.svg.png',

        oneLinerAnswer: "Wasted memory space. External: Free RAM exists but is non-contiguous (too small holes). Internal: Allocated block is larger than requested.",
        why: "Memory allocation is not perfect. We can't pack bytes with 100% efficiency given dynamic requests.",
        tradeoffs: [
            "Compaction vs Speed: We can shuffle memory to fix external fragmentation, but copying GBs of RAM freezes the system.",
            "Paging: Solves external fragmentation but introduces slight internal fragmentation."
        ],
        failureCases: [
            "Allocation Failure: malloc() returns NULL even if total free RAM > requested size (because of holes).",
            "Bloat: Internal fragmentation wastes ~15% of RAM on average."
        ],
        realWorldUsage: "Heap allocators (malloc/free logic).",

        content: `### The Wasted Space Problem
As processes are loaded and removed, memory becomes Swiss Cheese.

#### 1. External Fragmentation
*   Total free memory is enough (e.g., 500KB), but it is **not contiguous** (non-adjacent blocks). We can't fit a 500KB process.
*   **Solution**: **Compaction** (Shuffle memory) or **Paging**.

#### 2. Internal Fragmentation
*   We allocate memory in fixed blocks (e.g., 4KB). Process needs 3KB.
*   **Result**: 1KB inside the block is wasted.
*   **Solution**: Unavoidable with fixed size blocks, but minimized by small block size.`,
        code: {
            text: `Memory View:
[Process A]
[FREE - 10MB] <--- Too small
[Process B]
[FREE - 10MB] <--- Too small
Request: 15MB. Fails despite 20MB free.`
        },
        interviewQuestions: [
            { question: "Which fragmentation does Paging solve?", answer: "External Fragmentation. By breaking memory into fixed frames, we can allocate any free frame to a process, regardless of contiguity.", companies: ["VMware"] },
            { question: "Does Paging eliminate Fragmentation?", answer: "No. It eliminates External Fragmentation but suffers from Internal Fragmentation (e.g., if a process needs 10.1 KB and pages are 4KB, it gets 3 pages (12KB), wasting 1.9KB).", companies: ["Google"] }
        ]
    },
    '1.4-paging-mech': {
        title: 'Paging & TLB',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Paging_Memory_Management.png',

        oneLinerAnswer: "Eliminates external fragmentation by dividing memory into fixed-size blocks (Frames). The Page Table maps User Pages to Physical Frames.",
        why: "Contiguous allocation is impossible with multiple dynamic processes. Paging allows a process to be scattered across physical RAM.",
        tradeoffs: [
            "Speed: Two memory accesses per instruction (Page Table + Data). Solved by TLB (Cache).",
            "Memory: Page Tables themselves consume RAM (Solved by Multi-level paging)."
        ],
        failureCases: [
            "TLB Thrashing: If working set > TLB size, performance drops 100x.",
            "Page Fault: Accessing a page not in RAM triggers disk I/O."
        ],
        realWorldUsage: "All modern OS (Linux 4KB pages).",

        content: `### Non-Contiguous Allocation
*   **Frames**: Divide Physical Memory into fixed blocks (e.g., 4KB).
*   **Pages**: Divide Logical Memory into same-sized blocks.
*   **Page Table**: A map stored in RAM. $Page \# \to Frame \#$.

### Translation Lookaside Buffer (TLB)
Querying the Page Table (in RAM) is slow (Double memory access).
*   **TLB**: A specialized, ultra-fast hardware cache inside the MMU. Stores recent translations.
*   **Hit**: 1 Cycle. **Miss**: 100 Cycles.

#### Effective Access Time (EAT)
$EAT = (HitRate \times T_{tlb}) + (MissRate \times 2 \times T_{mem})$.`,
        code: {
            c: `// Pseudo Address Translation
int translate(virtual_addr) {
   if (check_tlb(virtual_addr)) return tlb_get(virtual_addr);
   int frame = page_table[virtual_addr]; // Slow RAM access
   tlb_update(virtual_addr, frame);
   return frame;
}`
        },
        interviewQuestions: [
            { question: "Why is Page Size always a power of 2?", answer: "Splitting generic address into Page Number and Offset becomes trivial (Low bits = Offset, High bits = Page #) without arithmetic division.", companies: ["ARM"] },
            { question: "What is a Multi-Level Page Table?", answer: "A technique to save memory. Instead of one giant table (which might be 4MB per process), we page the page table itself. This allows keeping only active parts of the table in RAM.", companies: ["Intel"] }
        ]
    },
    '1.4-segment': {
        title: 'Segmentation',
        visualizerType: 'segmentation',

        oneLinerAnswer: "Divides memory into logical units (Code, Stack, Heap) of variable sizes, mirroring the programmer's view.",
        why: "Paging is efficient for HW, but segmentation is better for protection (Read-only Code segment, No-Execute Stack).",
        tradeoffs: [
            "Fragmentation: Suffers from External Fragmentation (variable sizes).",
            "Complexity: Harder to allocate than fixed 4KB pages."
        ],
        failureCases: [
            "Stack Overflow: Segment grows beyond its limit.",
            "Buffer Overflow: Writing beyond the data segment."
        ],
        realWorldUsage: "x86 (GDT), Combined with Paging (Paged Segmentation).",

        content: `### The User's View
Users don't think in "Pages". They think in "Functions", "Stack", "Arrays".
*   **Segmentation**: Memory is a collection of variable-sized segments.
*   **Address**: $\langle Segment, Offset \rangle$.
*   **Segment Table**: Stores Base and Limit for each segment.

### Paging vs Segmentation
| Feature | Paging | Segmentation |
| :--- | :--- | :--- |
| **Block Size** | Fixed | Variable |
| **Visible to User**| No (Hidden) | Yes (Compiler/Linker) |
| **Fragmentation** | Internal | External |`,
        code: {
            asm: `; Intel x86 uses Segmentation AND Paging
; CS:EIP (Code Segment : Instruction Pointer)`
        },
        interviewQuestions: [
            { question: "Why modern OS use Paged Segmentation?", answer: "To get benefits of both. Segments (Logical organization) are composed of Pages (Physical efficiency).", companies: ["Intel"] },
            { question: "Does Segmentation produce Internal Fragmentation?", answer: "No. Segments are variable sized, so we allocate exactly what is needed. However, it suffers from External Fragmentation (holes between segments).", companies: ["Microsoft"] }
        ]
    },
    '1.4-virt-mech': {
        title: 'Virtual Memory',
        visualizerType: 'virtual-memory',

        oneLinerAnswer: "Uses Disk as an extension of RAM, creating the illusion of infinite memory. Moves pages between RAM and Swap Space on demand.",
        why: "To run programs (e.g. GTA V: 100GB) that are larger than physical RAM (16GB).",
        tradeoffs: [
            "Speed vs Capacity: Disk is 100,000x slower than RAM. If we swap too much, system crawls.",
            "Complexity: Requires hardware support (MMU, Valid/Invalid bits)."
        ],
        failureCases: [
            "Thrashing: Continuous Swapping. System becomes unresponsive.",
            "Out of Memory (OOM): Even Swap is full. OS kills a process."
        ],
        realWorldUsage: "Swapfile / Pagefile in Windows/Linux.",

        content: `### The Illusion of Infinity
Allows running programs larger than Physical RAM.
*   **Mechanism**: Main Memory acts as a "Cache" for the Disk.
*   **Demand Paging**: Bring a page into RAM only when it is needed.

#### Page Fault
1.  Access Page $P$.
2.  Bit says **Invalid** (Not in RAM).
3.  **Trap** to OS.
4.  OS finds Page on Disk.
5.  OS loads Page into Free Frame.
6.  Restart Instruction.`,
        code: {
            text: `Thrashing Warning:
If working set > Physical RAM, system creates Page Fault storm.
Result: CPU Utilization drops to 0%. Disk Utilization hits 100%.`
        },
        interviewQuestions: [
            { question: "What is Copy-on-Write?", answer: "When fork() is called, Parent and Child share the same physical pages (READ ONLY). If one writes, ONLY THEN do we copy that specific page. Saves huge RAM.", companies: ["Facebook"] },
            { question: "Where is the Swap Space located?", answer: "On the Disk (HDD/SSD). It's a special partition or file used to store pages evicted from RAM.", companies: ["Linux"] }
        ]
    },
    '1.4-repl': {
        title: 'Page Replacement Algorithms',
        visualizerType: 'page-replacement',

        oneLinerAnswer: "Decides which page to evict from RAM when it's full. LRU (Least Recently Used) is the gold standard approximation.",
        why: "We need to discard the 'garbage' (unused pages) to make room for 'hot' data. Removing the wrong page causes immediate page faults.",
        tradeoffs: [
            "Accuracy vs Cost: Perfect prediction (OPT) is impossible. Accurate tracking (LRU) is expensive.",
            "Clock Algorithm: A cheap approximation of LRU used in real systems."
        ],
        failureCases: [
            "Belady's Anomaly (FIFO): Adding more RAM causes MORE faults.",
            "Worst Case: Cyclic access pattern causes 100% miss rate in LRU."
        ],
        realWorldUsage: "Clock Algorithm (Linux), Second Chance.",

        content: `### Choosing the Victim
When RAM is full and a Page Fault occurs, we must evict a page. Which one?

#### 1. FIFO (First In First Out)
*   Evict the oldest page.
*   **Belady's Anomaly**: Adding MORE frames can cause MORE page faults!

#### 2. Optimal (OPT)
*   Evict page that will not be used for the **longest time in future**.
*   **Impossible** to implement (Requires future knowledge). Used as benchmark.

#### 3. LRU (Least Recently Used)
*   Evict page that hasn't been used for the longest time.
*   **Logic**: Past predicts future.
*   **Implementation**: Stack or Time-stamp. Expensive hardware support.`,
        code: {
            python: `# LRU Logic
cache = OrderedDict()
def access(page):
    if page in cache:
         cache.move_to_end(page)
    elif len(cache) >= SIZE:
         cache.popitem(last=False) # Remove first (oldest)
    cache[page] = data`
        },
        interviewQuestions: [
            { question: "Why is LRU hard to implement?", answer: "You need to update a timestamp/stack on EVERY memory reference. This is too fast for software. Needs MMU hardware support.", companies: ["Apple"] },
            { question: "What is Belady's Anomaly?", answer: "A phenomenon in FIFO page replacement where adding MORE memory frames results in MORE page faults. It happens because FIFO doesn't respect the stack property.", companies: ["IBM"] }
        ]
    },
    '1.4-thrush': {
        title: 'Thrashing',
        visualizerType: 'thrashing',

        oneLinerAnswer: "A collapse state where the OS spends more time swapping pages (I/O) than executing instructions suitable.",
        why: "Happens when the 'Working Set' (active memory needs) of all processes exceeds total RAM.",
        tradeoffs: [
            "Fairness vs Survival: To stop thrashing, the OS MUST pause/kill some processes (unfair) to save the system.",
            "Multiprogramming Degree: We must lower the number of active apps."
        ],
        failureCases: [
            "System Freeze: HDD light solid on, mouse stuck.",
            "Cascading Timeout: Web server times out while swapping."
        ],
        realWorldUsage: "Opening 100 Chrome tabs on a 4GB laptop.",

        content: `### The Collapse
When the sum of the **Working Sets** of all processes > Total RAM.
*   The OS spends 99% of time swapping pages in/out. 1% executing.
*   **Symptom**: HDD LED is solid on. Mouse freezes.

### Working Set Model
*   The set of pages a process is currently using frequently ($W(t, \Delta)$).
*   If we provide frames < Working Set, Process will thrash.
*   **Fix**: Suspend one process (Swapping).`,
        code: {
            text: `Prevention:
1. Buy more RAM.
2. Long Term Scheduler (Limit Degree of Multiprogramming).`
        },
        interviewQuestions: [
            { question: "How does the OS detect Thrashing?", answer: "It monitors CPU utilization. If CPU utilization is LOW but Disk I/O is HIGH, it assumes Thrashing.", companies: ["Microsoft"] },
            { question: "Local vs Global Replacement?", answer: "Global: A process can steal a frame from another process (Good throughput, potential thrashing). Local: Can only replace its own pages (Stable per-process performance).", companies: ["Google"] }
        ]
    },
    // 1.5 Storage Management
    '1.5-disk-struct': {
        title: 'Disk Structure & Mechanics',
        visualizerType: 'disk-struct',

        oneLinerAnswer: "HDD uses magnetic platters and a moving arm. Data access = Seek Time (Arm) + Rotational Latency (Spin) + Transfer Time.",
        why: "Magnetic storage is cheap and non-volatile. Understanding the mechanics is key to performance.",
        tradeoffs: [
            "Capacity vs Speed: HDDs are huge/cheap but slow (ms). SSDs are fast (us) but expensive per byte.",
            "Random vs Sequential: Seek time kills random access performance on HDDs."
        ],
        failureCases: [
            "Head Crash: Physical head touches the platter (Data destruction).",
            "Bad Sector: Magnetic decay makes a block unreadable."
        ],
        realWorldUsage: "Data Centers (HDD for cold storage), Laptops (SSD for boot).",

        content: `### The Hard Disk Drive (HDD)
A mechanical marvel.
*   **Platters**: Magnetic disks.
*   **Tracks**: Concentric circles on a platter.
*   **Sectors**: Smallest addressable unit (usually 512 bytes).
*   **Cylinder**: Set of tracks at same arm position across all platters.

#### Performance Metrics
1.  **Seek Time**: Time to move the Arm to the correct Cylinder. (Slowest, ~5-10ms).
2.  **Rotational Latency**: Time for the Sector to rotate under the Head. (Depends on RPM).
3.  **Transfer Time**: Time to read the bytes.

> **SSD Note**: No moving parts. Access time is uniform (Random Access). No Seek Time.`,
        code: {
            text: `Access Time = Seek + Latency + Transfer
Example: 7200 RPM Drive.
Avg Latency = 0.5 * (60 / 7200) = 4.16 ms.`
        },
        interviewQuestions: [
            { question: "Why is Seek Time so critical?", answer: "It is mechanical movement. It is 100,000x slower than CPU ops. Optimizing order of requests (Disk Scheduling) aims primarily to reduce Seek Time.", companies: ["Seagate"] },
            { question: "What is Zone Bit Recording?", answer: "Modern disks pack more sectors on outer tracks than inner tracks to maximize density. The OS treats it as a logical array.", companies: ["Western Digital"] }
        ]
    },
    '1.5-disk-sched': {
        title: 'Disk Scheduling Algorithms',
        visualizerType: 'disk-scheduling',

        oneLinerAnswer: "Algorithms (Elevator/SCAN, LOOK) to reorder I/O requests to minimize the mechanical movement (Seek Time) of the HDD arm.",
        why: "Seek time is expensive (10ms). Random requests are 100x slower than sequential ones.",
        tradeoffs: [
            "Fairness vs Speed: SSTF (Shortest Seek First) is fastest but starves far-away requests.",
            "Complexity: Modern SSDs don't need this (no moving arm), so OS scheduling matters less for them."
        ],
        failureCases: [
            "Starvation (SSTF): The arm gets stuck servicing the inner tracks indefinitely.",
            "Priority Inversion: High priority storage req stuck behind a massive batch job."
        ],
        realWorldUsage: "Elevator Algorithm (SCAN), C-LOOK.",

        content: `### Optimizing the Arm Movement
We have a queue of requests: 98, 183, 37, 122... Head is at 53.

#### 1. FCFS (First Come First Serve)
*   Head jumps wildly: $53 \to 98 \to 183 \to 37$.
*   **Fair**, but slow.

#### 2. SSTF (Shortest Seek Time First)
*   Go to closest neighbor. $53 \to 37$ (Dist 16).
*   **Fast**, but causes **Starvation** (Far away requests wait forever).

#### 3. SCAN (The Elevator)
*   Go to one end (0), then reverse to other end (200). Service requests along the way.
*   **Analogy**: An Elevator doesn't jump Floors 1 -> 10 -> 2. It goes 1, 2, 3...

#### 4. C-SCAN (Circular Scan)
*   Like SCAN, but when it hits the end, it "teleports" back to start without servicing.
*   **Benefit**: Provides more uniform wait time.`,
        code: {
            python: `requests = [98, 183, 37]
head = 53
# SSTF Logic
# Dist from 53: 98(45), 183(130), 37(16).
# Closest is 37. Move to 37.`
        },
        interviewQuestions: [
            { question: "Why C-SCAN over SCAN?", answer: "SCAN treats the middle tracks better than the edge tracks. C-SCAN treats all tracks equally by always scanning in one direction.", companies: ["Western Digital"] },
            { question: "Can the OS optimize for Rotational Latency?", answer: "No. The OS controls the Arm (Seek). It cannot control the rotation of the platter. Only the Disk Controller firmware can attempt to optimize that.", companies: ["Seagate"] }
        ]
    },
    '1.5-raid': {
        title: 'RAID Levels',

        oneLinerAnswer: "Redundant Array of Independent Disks (RAID) combines multiple disks to achieve Redundancy (Backup) and Performance (Speed).",
        why: "Disks fail. We need a way to survive drive failure without losing data (Mirroring/Parity).",
        tradeoffs: [
            "RAID 0 (Speed) vs RAID 1 (Safety): 0 is fast but risky. 1 is safe but 50% capacity cost.",
            "RAID 5/6 (Parity): Good balance, but slow write penalty (Calc parity)."
        ],
        failureCases: [
            "Double Disk Failure: RAID 5 can survive 1 failure. If 2 fail during rebuild, data is lost.",
            "Write Hole: Power loss during write leaves parity inconsistent."
        ],
        realWorldUsage: "RAID 10 (Databases), RAID 5/6 (File Servers).",

        content: `### Redundant Array of Independent Disks
Combining multiple cheap disks to get Performance + Reliability.

#### RAID 0 (Striping)
*   Spread data across N disks.
*   **Pros**: Max Speed (Read/Write is parallel).
*   **Cons**: **Zero Reliability**. If 1 disk fails, ALL data is lost.

#### RAID 1 (Mirroring)
*   Duplicate data on N disks.
*   **Pros**: Max Reliability.
*   **Cons**: Expensive (50% storage capacity). Slow Write (must write to both).

#### RAID 5 (Striping with Parity)
*   Data stripped, plus a Parity Block ($P = A \\oplus B \\oplus C$).
*   **Pros**: Good compromise. Can survive 1 disk failure. Efficient (N-1 capacity).

#### RAID 10 (1+0)
*   Stripe across Mirrors.
*   **Pros**: Best of both worlds (Speed + Reliability).
*   **Cons**: Expensive.`,
        code: {
            text: `Parity Calculation (XOR):
Disk 1: 1010
Disk 2: 1100
Parity: 0110
If Disk 1 dies, we XOR Disk 2 and Parity -> 1100 ^ 0110 = 1010 (Recovered!)`
        },
        interviewQuestions: [
            { question: "Which RAID for Database Server?", answer: "RAID 10. Databases need high random write speed (Striping) and reliability (Mirroring). RAID 5 write penalty (calculate parity) is too slow.", companies: ["Oracle"] },
            { question: "What is a Hot Spare?", answer: "An idle disk connected to the RAID controller. If a drive fails, the Hot Spare automatically takes its place and rebuilding begins immediately.", companies: ["Dell"] }
        ]
    },
    '1.5-file': {
        title: 'File System Implementation',

        oneLinerAnswer: "How the OS maps 'files' (Stream of bytes) to 'blocks' (Physical disk sectors). Uses Inodes (Unix) or FAT tables (Windows).",
        why: "To organize data hierarchically and manage free space efficiently.",
        tradeoffs: [
            "Contiguous (Fast, Fragmented) vs Linked (Slow, Flexible) vs Indexed (Balanced).",
            "Journaling: Adds reliability (crash recovery) but slows down writes."
        ],
        failureCases: [
            "Corruption: Power cut during write leaves file pointers dangling (fsck fixes this).",
            "Fragmentation: File scattered across disk affects read speed."
        ],
        realWorldUsage: "EXT4 (Linux), NTFS (Windows), APFS (Mac).",

        content: `### How Files are Stored
The user sees a stream of bytes. The OS sees blocks on disk.

#### Allocation Methods
1.  **Contiguous**: File occupies consecutive blocks (Start, Length).
    *   Fast, but External Fragmentation.
2.  **Linked**: Linked List of blocks.
    *   No fragmentation, but Random Access is terrible (Seek, Seek, Seek).
3.  **Indexed (Inodes)**: A special block (Index Block) contains pointers to all data blocks.
    *   Used in **Unix/Linux**. Supports random access and no fragmentation.

#### Free Space Management
*   **Bit Vector**: 1 bit per block. 001100... (Compact, HW support).
*   **Linked List**: Chain of free blocks.`,
        code: {
            bash: `# Managing Files
df -h # Disk Free (Superblock info)
du -sh # Disk Usage (Traverse Inodes)
fsck # File System Check (Consistency fix)`
        },
        interviewQuestions: [
            { question: "What is an Inode?", answer: "Data structure storing file metadata (Owner, Permissions, Size, Pointers to data blocks). The filename is NOT in the inode; it is in the Directory file.", companies: ["Red Hat"] },
            { question: "What is the superblock?", answer: "The metadata of the filesystem itself (Type, Block size, Total blocks, Free blocks). If the superblock is corrupted, the FS cannot be mounted.", companies: ["Linux"] }
        ]
    }
    ,
    '1.2-threads': { title: 'Threads', content: `### Threads\nA thread is a basic unit of CPU utilization.` },
    '1.2-sync': { title: 'Process Synchronization', content: `### Synchronization\nCooperating processes can affect or be affected by other processes.` },
    '1.3-deadlocks': { title: 'Deadlocks', content: `### Deadlock\nA deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another.` },
    '1.3-conditions': { title: 'Conditions', content: `### Deadlock Conditions\nDeadlock can arise if four conditions hold simultaneously.` },
    '1.3-handling': { title: 'Handling', content: `### Handling Deadlocks\nGenerally, we can deal with the deadlock problem in one of three ways.` },
    '1.4-memory': { title: 'Memory Management', content: `### Memory Management\nMemory management handles primary memory and moves processes back and forth.` },
    '1.4-basics': { title: 'Basics', content: `### Memory Basics\nLogical address space vs physical address space.` },
    '1.4-replace': { title: 'Page Replacement', content: `### Page Replacement\nWhen a page fault occurs and there are no free frames, we must select a victim frame.` },
    '1.5-storage': { title: 'Storage Management', content: `### Storage Management\nThe file system resides permanently on secondary storage.` },
    '1.5-disk': { title: 'Disk Structure', content: `### Disk Structure\nDisk drives are addressed as large 1-dimensional arrays of logical blocks.` },
    '1.5-fs': { title: 'File System', content: `### File System Interface\nThe file system provides the mechanism for on-line storage.` },
    '1.1-basics': { title: 'Basics', content: `### Basics\nFundamental concepts.` },
    '1.1-intro': { title: 'Introduction', content: `### Introduction\nOverview of Operating Systems.` },
    '1.1-structure': { title: 'System Structure', content: `### System Structure\nHow the OS is organized.` },
    '1.1-types': { title: 'Types of OS', content: `### Types of OS\nBatch, Time-sharing, Distributed, Real-time.` },
    '1.2-concepts': { title: 'Process Concepts', content: `### Process Concepts\nWhat is a process?` },
    '1.2-process': { title: 'Process Management', content: `### Process Management\nThe OS is responsible for the following activities in connection with process management.` },
    '1.2-scheduling': { title: 'Scheduling', content: `### Scheduling\nThe basis of multiprogrammed operating systems.` },
    // --- 1.6 Advanced Concepts ---
    '1.1-basics-def': {
        title: 'Definition of Operating System',

        // --- FAANG SCHEMA START ---
        oneLinerAnswer: "An Operating System is a resource manager that abstracts hardware complexity and provides a secure, isolated environment for applications to execute.",
        why: "Directly accessing hardware (Disk sectors, RAM addresses) is complex and dangerous. We need a layer to manage resources fairly, enforce security, and provide a standard API (System Calls) for programs.",
        tradeoffs: [
            "Overhead: The OS itself consumes CPU and Memory that could be used by apps.",
            "Complexity: Makes the system harder to debug (Kernel Mode vs User Mode)."
        ],
        failureCases: [
            "Kernel Panic: If the OS kernel crashes, the entire machine halts.",
            "Thrashing: Poor memory management leads to higher disk I/O than CPU execution.",
            "Deadlock: Poor resource management causes processes to wait indefinitely."
        ],
        realWorldUsage: "Windows, Linux (Android), macOS (iOS), and RTOS in cars.",
        // --- FAANG SCHEMA END ---

        content: `### The Intermediary
An **Operating System** constitutes the *essential* software that sits between:
1.  **Hardware** (CPU, RAM, I/O devices)
2.  **User Programs** (Browser, Game, Editor)

#### Core Goals
*   **Efficiency**: Manage resources (CPU scheduling, Memory allocation) so hardware is not wasted.
*   **Convenience**: Hide the messy details of hardware (Abstract a 512-byte disk sector into a "File").
*   **Isolation**: Ensure Process A cannot crash Process B.

#### The Kernel
The "heart" of the OS. It is the *one* program running at all times (with special privileges). Everything else is a System Program or User Program.`,
        interviewQuestions: [
            { question: "What is the difference between Kernel Mode and User Mode?", answer: "Kernel Mode: Unrestricted access to hardware (Ring 0). User Mode: Restricted access (Ring 3). If a user app crashes, the OS survives. If the Kernel crashes, system panics.", companies: ["Google"] },
            { question: "Is the Browser part of the OS?", answer: "No. The Browser is a user-space application. However, ChromeOS blurs this line by making the browser the primary interface.", companies: ["Microsoft"] }
        ]
    },
    '1.6-virt-hyper': {
        title: 'Virtualization: Hypervisors',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hyperviseur.svg/1200px-Hyperviseur.svg.png',

        oneLinerAnswer: "A software layer (Hypervisor) that allows multiple OSs (Guests) to run on a single physical machine (Host) by sharing hardware.",
        why: "Servers are powerful but underutilized (10% CPU). Virtualization lets us pack 20 servers onto 1 hardware box.",
        tradeoffs: [
            "Type 1 (Bare Metal) vs Type 2 (Hosted): Type 1 is faster (Direct HW access). Type 2 is easier (runs as App).",
            "Overhead: Translation of instructions costs CPU cycles."
        ],
        failureCases: [
            "VM Escape: Malware breaks out of the VM to infect the Host.",
            "Noisy Neighbor: One VM hogs disk I/O, slowing down others."
        ],
        realWorldUsage: "AWS EC2 (Type 1), VirtualBox (Type 2).",

        content: `### The Layer of Lies
Virtualization allows running multiple OS instances (Guests) on a single physical machine (Host). The **Hypervisor** (VMM) creates this illusion.

#### Type 1 (Bare Metal)
* **Architecture**: Hypervisor sits directly on Hardware. No Host OS.
* **Performance**: High.
* **Examples**: VMware ESXi, Microsoft Hyper-V, Xen.
* **Use Case**: Enterprise Data Centers, Cloud (AWS EC2).

#### Type 2 (Hosted)
* **Architecture**: Hypervisor runs as an app inside a Host OS (like Windows/Linux).
* **Performance**: Lower (Overhead of Host OS).
* **Examples**: VirtualBox, VMware Workstation.
* **Use Case**: Dev testing on laptops.`,
        interviewQuestions: [
            { question: "What is the difference between Full Virtualization and Paravirtualization?", answer: "Full Virt: The Guest OS doesn't know it's virtualized (Slow). Para Virt: The Guest OS is modified to talk to the Hypervisor (Fast).", companies: ["AWS", "VMware"] },
            { question: "Emulation vs Virtualization?", answer: "Emulation (QEMU): Software simulates hardware (slow, can run ARM on x86). Virtualization: Hypervisor allows direct access to CPU (fast, must be same Arch).", companies: ["Google"] }
        ]
    },
    '1.6-virt-container': {
        title: 'Containers (Docker) vs VMs',
        image: 'https://www.docker.com/wp-content/uploads/2021/11/docker-containerized-app-vs-VM.png',

        oneLinerAnswer: "OS-level virtualization. Unlike VMs (which have full OS), Containers share the Host Kernel but isolate User Space (Bin/Libs).",
        why: "VMs are heavy (GBs, minutes to boot). Containers are light (MBs, ms to boot), enabling Microservices.",
        tradeoffs: [
            "Isolation vs Efficiency: Containers are faster but less secure than VMs (Shared Kernel = Shared weakness).",
            "Compatibility: Linux containers can't natively run on Windows (without a VM layer)."
        ],
        failureCases: [
            "Kernel Panic: If Host kernel dies, ALL containers die.",
            "Privilege Escalation: Easier to hack the host from a container than a VM."
        ],
        realWorldUsage: "Docker, Kubernetes, Netflix Microservices.",

        content: `### The Lightweight Revolution
* **Virtual Machines (VMs)**: Virtualize the **Hardware**. Each VM has a full OS kernel. Heavy (GBs).
* **Containers**: Virtualize the **OS**. All containers share the *same* Host Kernel but have isolated user spaces (bins/libs). Light (MBs).

#### How Containers Work (Linux Namespaces & Cgroups)
1.  **Namespaces**: Isolation. Process A thinks it is PID 1, but on Host it is PID 5000. It cannot see Process B.
2.  **Cgroups (Control Groups)**: Resource Limiting. "Container A gets max 512MB RAM and 20% CPU".

| Feature | VM | Container |
| :--- | :--- | :--- |
| **Boot Time** | Minutes | Milliseconds |
| **Size** | Gigabytes | Megabytes |
| **Isolation** | Strong (Hardware level) | Weaker (Kernel shared) |`,
        code: {
            bash: `# Docker utilizes the Host Kernel
docker run -it ubuntu /bin/bash
# If you run 'uname -r' inside container, 
# you see the HOST's kernel version!`
        },
        interviewQuestions: [
            { question: "Can I run a Windows Container on Linux?", answer: "No (natively). Containers share the Kernel. A Windows app needs a Windows Kernel syscall interface. You need a VM for that.", companies: ["Docker", "Google"] },
            { question: "What is a Docker Image Layer?", answer: "A read-only template. Images are built from stacked layers (Base OS, Deps, App code) using Union File Systems (OverlayFS). Maximizes caching.", companies: ["DevOps"] }
        ]
    },
    '1.6-sec-access': {
        title: 'Access Control: ACLs vs Capabilities',
        content: `### Who can do what?
When Subject $S$ wants to access Object $O$.

#### 1. Access Control Lists (ACLs) - "The Guest List"
* **View**: Column-based. Stored with the **Object** (File).
* **Logic**: "File X: User A (Read), User B (Write)".
* **Pros**: Easy to revoke ("Remove User A from list").
* **Used by**: Windows NTFS, Linux Ext4 (chmod).

#### 2. Capability Lists - "The Key Ring"
* **View**: Row-based. Stored with the **Subject** (User/Process).
* **Logic**: "User A holds: { Key to File X, Key to File Y }".
* **Pros**: No check needed at file. If you have the key, you enter. Harder to forge.
* **Used by**: Android (App Permissions), Hydra.`,
        interviewQuestions: [
            { question: "What is the Principle of Least Privilege?", answer: "A subject should be given only those privileges that it needs to complete its task. (e.g., A web server shouldn't have Root access).", companies: ["Microsoft"] },
            { question: "Unix Permissions 755 meaning?", answer: "Owner: Read+Write+Exec. Group: Read+Exec. Others: Read+Exec.", companies: ["Linux"] }
        ]
    },
    '1.6-sec-buffer': {
        title: 'Buffer Overflow',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Buffer_overflow_stack.svg',
        content: `### The Classic Hack
Occurs when a program writes data beyond the boundary of a fixed-length buffer.
* **The Target**: The **Return Address** on the Stack.
* **The Attack**:
    1.  Attacker inputs a super long string.
    2.  String fills buffer -> Overwrites Frame Pointer -> Overwrites Return Address.
    3.  Return Address now points to **Malicious Shellcode** injected by attacker.
    4.  Function returns -> Jumps to Shellcode -> Root Access.

#### Defenses
* **ASLR (Address Space Layout Randomization)**: Randomly move stack/heap locations so attacker can't guess addresses.
* **NX Bit (No-Execute)**: Mark stack memory as non-executable.`,
        code: {
            c: `// Vulnerable C Code
void func(char *str) {
    char buffer[10];
    strcpy(buffer, str); // No bounds check!
}`
        },
        interviewQuestions: [
            { question: "Why is strcpy() dangerous?", answer: "It doesn't check the destination size. Use strncpy() or strlcpy() instead.", companies: ["Cisco"] },
            { question: "What is a Stack Canary?", answer: "A secret value placed before the return address on the stack. Before returning, the function checks if the canary is intact. If altered, stack corruption occurred.", companies: ["Google"] }
        ]
    },
    '1.6-linux-sys': {
        title: 'VFS (Virtual File System)',
        content: `### The Universal Interface
Linux can read Ext4, NTFS, FAT32, and NFS simultaneously. How?
* **VFS**: An abstraction layer between the User and the actual Filesystems.
* **Logic**:
    * User calls \`open()\`.
    * VFS sees file is on a USB stick (FAT32).
    * VFS redirects call to \`fat32_open()\`.
* **Everything is a File**: In Linux, \`/proc\` (Processes), \`/dev\` (Devices), and \`/sys\` (Kernel info) are all exposed as files via VFS.`,
        code: {
            bash: `# VFS in action
cp /file/on/ext4 /file/on/ntfs
# The cp command doesn't know the difference. VFS handles the translation.`
        },
        interviewQuestions: [
            { question: "What is /proc?", answer: "A pseudo-filesystem. It doesn't exist on disk. It is a window into the Kernel's memory (e.g., /proc/cpuinfo, /proc/meminfo) exposed via VFS.", companies: ["Red Hat"] },
            { question: "Explain 'Everything is a File' in Linux.", answer: "Hardware devices (/dev/sda), Processes (/proc), Networking sockets, and Data are all accessed using the same standard File API (open, read, write, close).", companies: ["Linux Foundation"] }
        ]
    },
    '1.6-linux-load': {
        title: 'Load Average & Systemd',
        content: `### Load Average
Seen in \`top\` or \`uptime\`: \`load average: 0.50, 0.40, 0.30\`.
* **Definition**: The average number of processes that are either **Running** (using CPU) or **Waiting** (for CPU or Disk I/O).
* **Interpretation**:
    * Load < Cores: System is idle/fine.
    * Load > Cores: Processes are waiting. Lag.

### Systemd (PID 1)
The modern Init system for Linux (replacing SysVinit).
* **Parallel Startup**: Starts services (Network, UI, Bluetooth) simultaneously (Dependency graph).
* **On-Demand**: Starts services only when hardware is plugged in.
* **Management**: \`systemctl start/stop/status\`.`,
        interviewQuestions: [
            { question: "If I have a Quad-Core CPU and Load Average is 4.0, is it bad?", answer: "No, it's perfect utilization. Each core has exactly 1 process. If Load is 8.0, then 4 processes are waiting.", companies: ["Netflix"] },
            { question: "What is the difference between Soft Link and Hard Link?", answer: "Hard Link: Points to the same Inode. Deleting original doesn't affect link. Soft Link: Points to the path. If original is deleted, link is broken.", companies: ["Linux Foundation", "Google"] },
            { question: "What does `nice` command do?", answer: "It changes the priority of a process. A lower nice value (-20) means higher priority. Standard user processes start at 0.", companies: ["Ubuntu"] },
            { question: "What is a Daemon?", answer: "A background process that is not attached to a terminal (e.g., sshd, httpd). It usually starts at boot time.", companies: ["Red Hat"] }
        ]
    },
    // Headers for 1.6
    '1.6-advanced': { title: '1.6 Advanced Concepts', content: '### Advanced Concepts\nExplore virtualization, security, and Linux internals.' },
    '1.6-virt': { title: 'Virtualization', content: '### Virtualization\nTechniques for creating virtual versions of computing resources.' },
    '1.6-security': { title: 'Security', content: '### OS Security\nMechanisms to protect the system from malicious access.' },
    '1.6-linux': { title: 'Linux Internals', content: '### Linux Internals\nUnder the hood of the Linux Kernel.' }
};

const flatten = (items) => {
    // Debugging: Log available keys in contentMap
    console.log("OS ContentMap Keys:", Object.keys(contentMap));

    let flat = [];
    items.forEach(item => {
        // Merge hierarchy item with detailed contentMap
        const details = contentMap[item.id] || {};
        // Fallback content if missing
        if (!details.content) {
            console.error(`Missing content for ID: ${item.id}`); // Log missing content as error
            details.content = "Detailed content coming soon (Regenerating)...";
            details.title = item.title;
        }
        flat.push({ ...item, ...details });

        if (item.children) {
            flat = flat.concat(flatten(item.children));
        }
    });
    return flat;
};

const osData = {
    id: 'os',
    hierarchy: hierarchy,
    topics: flatten(hierarchy)
};

export default osData;
