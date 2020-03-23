/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE courseBaseService PLEASE EDIT ../course.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Course } from '../../domain/test_skaffolder_db/course';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../course.service.ts
 */

/*
 * SCHEMA DB course
 *
	{
		name: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_course: {
			type: Schema.ObjectId,
			ref : "exam"
		},
		_courses: [{
			type: Schema.ObjectId,
			ref : "student"
		}],
		_courses: [{
			type: Schema.ObjectId,
			ref : "teacher"
		}],
	}
 *
 */
@Injectable()
export class CourseBaseService {

    contextUrl: string = environment.endpoint + '/course';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * courseService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Course): Observable<Course> {
        return this.http
            .post<Course>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * courseService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * courseService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Course> {
        return this.http
            .get<Course>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * courseService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Course[]> {
        return this.http
            .get<Course[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * courseService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Course): Observable<Course> {
        return this.http
            .post<Course>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
