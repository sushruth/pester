import { observable, action } from 'mobx'

export class LibraryStore {
	@observable
	public libraries: URL[] = []

	@action
	public addLibrary(url: URL) {
		this.libraries.push(url)
	}
}
