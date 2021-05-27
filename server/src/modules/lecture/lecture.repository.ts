import {EntityRepository, Repository} from "typeorm";
import {Lecture} from './lecture.entity'; 

@EntityRepository(Lecture)
export class LectureRepository extends Repository<Lecture> {}
