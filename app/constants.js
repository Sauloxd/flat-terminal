angular
  .module('app')
  .constant("STRINGS", {
      1: [
        '$ Operating Systems',
        [
          'Adriano Valente',
          'Cesar Faustino',
          'Pedro Strabeli',
          'Saulo Furuta'
        ].join('<br>'),
        [
          'Process scheduling',
          '',
          'sched_yield system call'
        ].join('<br>')
      ],

      2: [
        ['<div class="terminal-code">', '</div>'].join([
          // '#include &#60sched.h&#62',
          'int main() { ',
          '  if(fork()) { ',
          '    while(1) { printf("Child process here!"); }',
          '  } else { ',
          '    while(1) { printf("Parent process here!"); }',
          '  }',
          '}'
        ].join('<br>'))
      ],

      // TODO: Replace it with an image! It'll be nice to show a screenshot here
      3: [
        ['<div class="terminal-code">', '</div>'].join([
        'Parent process here!',
        'Parent process here!',
        'Parent process here!',
        'Parent process here!',
        'Child process here!',
        'Child process here!',
        'Child process here!',
        'Parent process here!',
        'Parent process here!',
        'Parent process here!',
        'Parent process here!'
      ].join('<br>'))
    ],

    4: [
      ['<div class="terminal-code">', '</div>'].join([
        '#define YIELD_PROCESS 158 // system call number',
        'if(fork()) { ',
        '  while(1) {',
        '    printf("Child process here! I\'ll get out soon");',
        '    syscall(YIELD_PROCESS);',
        '  }',
        '} else { ',
        '  while(1) { printf("Parent process here!"); }',
        '}',
      ].join('<br>'))
    ],

    8: [
      ['<div class="terminal-code">', '</div>'].join([
        '...',
        'struct sched_param *p;',
        'if(fork()) { ',
        '  if(sched_setscheduler(getpid(), SCHED_RR, p) != 0) {',
        '    printf("Help! Could not set round-robin policy");',
        '    exit(EXIT_FAILURE);',
        '  }',
        '  while(1) {',
        '     ... '
      ].join('<br>'))
    ],

    // TODO: Replace it with a screenshot as well
    9: [
      ['<div class="terminal-code">', '</div>'].join([
        'Parent process here!',
        'Parent process here!',
        'Parent process here!',
        'Parent process here!',
        'Child process here! I\'ll get out soon',
        'Parent process here!',
        'Parent process here!',
        'Parent process here!',
        'Parent process here!'
      ].join('<br>'))
    ],
    10: [
      ['<div class="terminal-code">', '</div>'].join([
        'That\'s all folks!!',
        'Hope you guys enjoyed this Round-Robin madness!',
        '',
        'Thank you!'
      ].join('<br>'))
    ],
    })

  .constant("IMAGES", {
    'IMAGE_NOT_FOUND': '',
    'IMAGE_PATH': {
      5: '../assets/images/robin-beer.jpg',
      6: '../assets/images/round-robin.jpg',
      7: '../assets/images/round-robin-scheme.png'
    }
  })

  .constant("SLIDES", [
    { controller: 'terminal', params: { slide: 1 } },
    { controller: 'terminal', params: { slide: 2 } },
    { controller: 'terminal', params: { slide: 3 } },
    { controller: 'terminal', params: { slide: 4 } },
    { controller: 'images',   params: { slide: 5 } },
    { controller: 'images',   params: { slide: 6 } },
    { controller: 'images',   params: { slide: 7 } },
    { controller: 'terminal', params: { slide: 8 } },
    { controller: 'terminal', params: { slide: 9 } },
    { controller: 'terminal', params: { slide: 10 } },
  ])

  ;
