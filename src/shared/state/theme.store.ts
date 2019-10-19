import { action, observable } from 'mobx'

export enum ThemeNames {
	teams,
	teamsDark
}

export class ThemeStore {
	@observable
	public name: ThemeNames = ThemeNames.teamsDark

	@action
	public setBright() {
		this.name = ThemeNames.teams
	}

	@action
	public setDark() {
		this.name = ThemeNames.teamsDark
	}
}
