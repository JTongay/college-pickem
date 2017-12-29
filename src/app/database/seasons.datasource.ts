import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { ISeasonData } from '../models/Season';
import { SeasonService } from 'app/season.service';

export class SeasonDatasource extends DataSource<any> {
    constructor(
        private seasonService: SeasonService
    ) {
        super();
    }

    connect(): Observable<any> {
        console.log('what')
        return this.seasonService.getSeasons();
    }
    disconnect(): void {}
}

