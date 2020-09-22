import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MockComponent} from 'ng-mocks';
import {PrefixPipe} from '../../pipes/prefix.pipe';
import {SvgdefService} from '../../service/svgdef.service';
import {ImageSetLoaderComponent} from '../image-set-loader/image-set-loader.component';
import {BoardComponent} from './board.component';

describe('BoardComponent', () => {
	let component: BoardComponent;
	let fixture: ComponentFixture<BoardComponent>;

	beforeEach(async () =>
		TestBed.configureTestingModule({
			declarations: [BoardComponent, PrefixPipe, MockComponent(ImageSetLoaderComponent)
			],
			imports: [HttpClientModule],
			providers: [SvgdefService]
		})
			.compileComponents());

	beforeEach(() => {
		fixture = TestBed.createComponent(BoardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', async () => {
		expect(component).toBeTruthy();
	});
});
