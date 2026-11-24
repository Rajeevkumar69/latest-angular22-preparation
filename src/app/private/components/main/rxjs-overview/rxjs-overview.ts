import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
     imports: [CommonModule],
     selector: 'app-rxjs-overview',
     styleUrl: './rxjs-overview.scss',
     templateUrl: './rxjs-overview.html'
})
export class RxjsOverview implements OnInit, OnDestroy {
     private commonService = inject(CommonService);
     private subscription!: Subscription;

     public userType: any;
     public concepts = [
          {
               title: 'Observable',
               description: 'A stream that can emit multiple values over time, synchronously or asynchronously.'
          },
          {
               title: 'Observer',
               description: 'An object that listens to an Observable using next, error and complete callbacks.'
          },
          {
               title: 'Subscription',
               description: 'Represents an active Observable execution. We can unsubscribe to stop receiving values.'
          },
          {
               title: 'Subject',
               description: 'Works as both an Observable and an Observer. It can send values to multiple subscribers.'
          }
     ];

     public subjects = [
          {
               name: 'Subject',
               initial: 'No',
               behavior: 'Future values only'
          },
          {
               name: 'BehaviorSubject',
               initial: 'Required',
               behavior: 'Latest value immediately'
          },
          {
               name: 'ReplaySubject',
               initial: 'No',
               behavior: 'Previously buffered values'
          },
          {
               name: 'AsyncSubject',
               initial: 'No',
               behavior: 'Last value after completion'
          }
     ];

     public operators = [
          {
               name: 'map()',
               category: 'Transformation',
               description: 'Transforms every emitted value into a new value without changing the original source.',
               code: `of(1, 2, 3).pipe(
     map(value => value * 2)
).subscribe(console.log);

// Output: 2, 4, 6`
          },
          {
               name: 'filter()',
               category: 'Filtering',
               description: 'Allows only values that satisfy a given condition to pass through.',
               code: `of(1, 2, 3, 4, 5).pipe(
     filter(value => value % 2 === 0)
).subscribe(console.log);

// Output: 2, 4`
          },
          {
               name: 'tap()',
               category: 'Side Effects',
               description: 'Executes code for logging, debugging or other side effects without modifying the emitted value.',
               code: `of(10, 20).pipe(
     tap(value => console.log('Received:', value)),
     map(value => value * 2)
).subscribe(console.log);

// Output: 20, 40`
          },
          {
               name: 'switchMap()',
               category: 'Mapping',
               description: 'Switches to a new inner Observable whenever the source emits. It unsubscribes from the previous inner Observable.',
               code: `this.searchControl.valueChanges.pipe(
     switchMap(value =>
          this.http.get('/api/users?q=' + value)
     )
).subscribe(console.log);`
          },
          {
               name: 'debounceTime()',
               category: 'Performance',
               description: 'Waits for a specified period of inactivity before emitting the latest value. Useful for reducing unnecessary API calls.',
               code: `this.searchControl.valueChanges.pipe(
     debounceTime(500)
).subscribe(value => {
     console.log(value);
});`
          },
          {
               name: 'catchError()',
               category: 'Error Handling',
               description: 'Handles errors in an Observable stream and returns a fallback Observable or rethrows the error.',
               code: `this.http.get('/api/users').pipe(
     catchError(error => {
          console.error(error);
          return of([]);
     })
).subscribe(console.log);`
          }
     ];

     public otherOperators = [
          {
               name: 'mergeMap()',
               description: 'Runs multiple inner Observables concurrently.'
          },
          {
               name: 'concatMap()',
               description: 'Processes inner Observables sequentially.'
          },
          {
               name: 'distinctUntilChanged()',
               description: 'Ignores consecutive duplicate values.'
          },
          {
               name: 'take()',
               description: 'Takes a specified number of emissions.'
          },
          {
               name: 'finalize()',
               description: 'Runs cleanup logic when a stream terminates.'
          },
          {
               name: 'combineLatest()',
               description: 'Combines the latest values from multiple Observables.'
          }
     ];

     public advantages = [
          'Handles asynchronous operations efficiently.',
          'Provides powerful operators for data transformation.',
          'Supports cancellation and stream composition.',
          'Makes complex event handling easier.',
          'Works naturally with Angular HttpClient and Reactive Forms.'
     ];

     public disadvantages = [
          'Has a learning curve for beginners.',
          'Incorrect subscription management can cause memory leaks.',
          'Complex pipelines can be difficult to debug.',
          'Nested streams can reduce code readability.',
          'Unnecessary operators can increase complexity.'
     ];

     public alternatives = [
          {
               name: 'Angular Signals',
               usage: 'Reactive application state',
               difference: 'Synchronous reactive state'
          },
          {
               name: 'Promises',
               usage: 'Single asynchronous result',
               difference: 'Resolves once or rejects once'
          },
          {
               name: 'async / await',
               usage: 'Promise-based asynchronous code',
               difference: 'Simplifies asynchronous syntax'
          },
          {
               name: 'Fetch API',
               usage: 'HTTP requests',
               difference: 'Promise-based HTTP API'
          },
          {
               name: 'RxJS',
               usage: 'Events and asynchronous streams',
               difference: 'Powerful stream composition'
          }
     ];

     public modernAngular = [
          {
               name: 'toSignal()',
               description: 'Converts an Observable into a Signal so we can read its latest value synchronously.',
               code: `users = toSignal(
     this.userService.getUsers(),
     { initialValue: [] }
);`
          },
          {
               name: 'toObservable()',
               description: 'Converts a Signal into an Observable so we can use RxJS operators.',
               code: `query$ = toObservable(this.searchQuery);

results$ = this.query$.pipe(
     switchMap(query => this.searchService.search(query))
);`
          },
          {
               name: 'takeUntilDestroyed()',
               description: 'Automatically completes a subscription when its Angular component, directive or service is destroyed.',
               code: `this.userService.getUsers().pipe(
     takeUntilDestroyed(this.destroyRef)
).subscribe(console.log);`
          },
          {
               name: 'rxResource()',
               description: 'Integrates Observable-based asynchronous data with Angular resource APIs, including loading and error states.',
               code: `users = rxResource({
     stream: () => this.userService.getUsers()
});`
          }
     ];

     public interviewQuestions = [
          {
               question: 'Subject vs BehaviorSubject?',
               answer: 'Subject emits values to current subscribers. BehaviorSubject stores the latest value and immediately provides it to new subscribers.'
          },
          {
               question: 'switchMap vs mergeMap?',
               answer: 'switchMap unsubscribes from the previous inner Observable. mergeMap allows multiple inner Observables to execute concurrently.'
          },
          {
               question: 'switchMap vs concatMap?',
               answer: 'switchMap keeps the latest inner subscription. concatMap processes inner Observables sequentially in order.'
          },
          {
               question: 'debounceTime vs throttleTime?',
               answer: 'debounceTime waits for inactivity before emitting. throttleTime limits how frequently values are emitted within a time window.'
          },
          {
               question: 'Observable vs Promise?',
               answer: 'Observable can emit multiple values over time and supports operators. Promise resolves once or rejects once.'
          },
          {
               question: 'How do you prevent memory leaks?',
               answer: 'Use async pipe, takeUntilDestroyed or properly unsubscribe from manually managed subscriptions.'
          }
     ];

     public basicFlow = [
          'Observable',
          'pipe()',
          'Operators',
          'subscribe()'
     ];

     public searchExample = `this.searchControl.valueChanges.pipe(
     debounceTime(500),
     map(value => value.trim()),
     filter(value => value.length >= 2),
     distinctUntilChanged(),
     switchMap(value =>
          this.http.get('/api/users', {
               params: { search: value }
          }).pipe(
               catchError(() => of([]))
          )
     ),
     takeUntilDestroyed(this.destroyRef)
).subscribe(users => this.users = users);`;

     public subjectExample = `const subject = new Subject<string>();
subject.next('Admin');

const behavior = new BehaviorSubject<string>('Guest');
behavior.next('Admin');`;

     public searchFlow = [
          'Wait for typing to stop',
          'Trim input',
          'Validate length',
          'Ignore duplicate values',
          'Call API',
          'Handle errors',
          'Clean up subscription'
     ];

     constructor() { }

     ngOnInit(): void {
          this.subscription = this.commonService.$userTypeBehaviourSubject
               .subscribe({
                    next: (res: string) => {
                         this.userType = res;
                    },
                    error: (err) => {
                         console.log(err);
                    }
               });
     }

     ngOnDestroy(): void {
          this.subscription?.unsubscribe();
     }
}