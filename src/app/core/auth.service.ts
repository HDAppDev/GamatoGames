import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, switchMap } from "rxjs";
import { User } from "../interfaces/user.i";

@Injectable ({
    providedIn: "root",
})

export class AuthService {
    selectedlanguages$ = new BehaviorSubject("en");
    userRequestForHome$ = new BehaviorSubject<any>(null);


    // userDetailsForHome$: Observable<User> = this.userRequestForHome$.pipe(
    //     switchMap((user: any) => {
    //         return user && user.uid 
    //         ? this.angularFireStore
    //     })
    // )

    constructor( 
        // private angularFireStore: AngularFirestore,
    ) {

    }


    getLanguageList() {
    //     return(
    //         this,
    //         this.angularFirestore

    //     )
    // }
}