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
        'SYSCALL_DEFINE0\(sched_yield\)',
        '\{',
        'struct rq *rq = this_rq_lock();',
        'current->sched_class->yield_task(rq);',
        '__release(rq->lock);',
        'schedule();',
        'return 0;',
        '}',
      ].join('<br>'))
    ],
    11: [
      ['<div class="terminal-code" id="here " >', '</div>'].join([
        'SYSCALL_DEFINE2(sched_rr_get_interval, pid_t, pid,',
        '    struct timespec __user *, interval)',
        '{',
        '  rcu_read_lock();',
        ' p = find_process_by_pid(pid);',
        ' rq = task_rq_lock(p, &flags);',
        ' time_slice = p->sched_class->',
        'get_rr_interval(rq, p);',
        ' task_rq_unlock(rq, &flags);',
        ' rcu_read_unlock();',
        ' jiffies_to_timespec(time_slice, &t);',
        ' retval = ',
        'copy_to_user(interval, &t, sizeof(t)) ?'
        ,' -EFAULT : 0;',
        '}',
      ].join('<br>'))
    ],

    12: [
      ['<div class="terminal-code">', '</div>'].join([
        'That\'s all folks!!',
        'Hope you guys enjoyed this Presentation!',
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
    { controller: 'terminal', params: { slide: 11 } },
    { controller: 'terminal', params: { slide: 12 } },
  ])

  ;
