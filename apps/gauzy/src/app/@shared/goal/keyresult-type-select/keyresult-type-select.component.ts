import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KeyResultTypeEnum, GoalGeneralSetting, KPI } from '@gauzy/models';
import { NbDialogService } from '@nebular/theme';
import { EditKpiComponent } from '../../../pages/goal-settings/edit-kpi/edit-kpi.component';
import { first } from 'rxjs/operators';
import { GoalSettingsService } from '../../../@core/services/goal-settings.service';

@Component({
	selector: 'ga-keyresult-type-select',
	templateUrl: './keyresult-type-select.component.html',
	styleUrls: ['./keyresult-type-select.component.sass']
})
export class KeyresultTypeSelectComponent implements OnInit {
	@Input() parentFormGroup: FormGroup;
	@Input() settings: GoalGeneralSetting;
	@Input() orgId: string;
	@Input() KPIs: Array<KPI>;
	@Input() numberUnits: string[];
	@Input() helperText = true;

	keyResultTypeEnum = KeyResultTypeEnum;

	constructor(
		private dialogService: NbDialogService,
		private goalSettingsService: GoalSettingsService
	) {}

	ngOnInit(): void {}

	taskTypeValidators() {
		if (
			this.parentFormGroup.get('type').value ===
			this.keyResultTypeEnum.TASK
		) {
			this.parentFormGroup.controls['projectId'].setValidators([
				Validators.required
			]);
			this.parentFormGroup.controls['taskId'].setValidators([
				Validators.required
			]);
		} else {
			this.parentFormGroup.controls['projectId'].clearValidators();
			this.parentFormGroup.patchValue({ projectId: undefined });
			this.parentFormGroup.controls['taskId'].clearValidators();
			this.parentFormGroup.patchValue({ taskId: undefined });
		}
		this.parentFormGroup.controls['projectId'].updateValueAndValidity();
		this.parentFormGroup.controls['taskId'].updateValueAndValidity();
	}

	async getKPI() {
		await this.goalSettingsService
			.getAllKPI({ organization: { id: this.orgId } })
			.then((kpi) => {
				const { items } = kpi;
				this.KPIs = items;
			});
	}

	async openEditKPI() {
		const dialog = this.dialogService.open(EditKpiComponent, {
			context: {
				type: 'add'
			}
		});
		const response = await dialog.onClose.pipe(first()).toPromise();
		if (!!response) {
			await this.getKPI();
		}
	}
}
