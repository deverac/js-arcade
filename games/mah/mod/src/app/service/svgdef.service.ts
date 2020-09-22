import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { tilesets } from '../../assets/tilesets';


interface CacheItem {
	data?: string;
	request?: Promise<string>;
}

@Injectable()
export class SvgdefService {

	private cache: { [name: string]: CacheItem } = {};

	constructor(private http: HttpClient) {
	}

	async get(name: string): Promise<string> {
		let item = this.cache[name];
		if (item) {
			if (item.data) {
				// return item.data;
			}
		}
		item = {};
		if (tilesets[name]) {
			item.data = tilesets[name];
		} else {
			console.log('unhandled tileset name ' + name );
			item.data = tilesets.classic;
		}
		this.cache[name] = item;
		return Promise.resolve(item.data);
	}
}
