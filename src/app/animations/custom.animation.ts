import { style, trigger, state, transition, query, group, animate } from "@angular/animations";



export const slideOutLeft = trigger('slideOutLeft', [
    state(

        'removed',
        style({
            'margin-left': '-3vh',
            transform: 'translate3d(-110%, 0, 0)', 
        })
    ),
    transition('* => removed', [
        query(':enter, :leave', style({
            position: 'fixed',
            width: '100%'
        }), {optional: true}),
        group([
            query(
                ':enter', [
                    style({
                        transform: 'translateX(-100%)'
                    }),
                    animate('.250ms ease-out', style({
                        transform: 'translateX(0%)'
                    }))
                ],
                {
                    optional: true,
                }
            ),
            query(
                ':leave', 
                [
                    style({
                        transform: 'translateX(0%)'
                    }),
                    animate(
                        '.250ms ease-out',
                        style({
                            transform: 'translateX(100%)'
                        })
                    )
                ],
                {
                    optional: true,
                }
            )
        ])
    ])
])