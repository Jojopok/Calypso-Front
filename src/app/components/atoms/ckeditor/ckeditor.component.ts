import { ChangeDetectorRef, Component, Input, type AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	type EditorConfig,
	ClassicEditor,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	CodeBlock,
	Essentials,
	Heading,
	Indent,
	IndentBlock,
	Italic,
	Link,
	Paragraph,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	Underline
} from 'ckeditor5';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDEyMTkxOTksImp0aSI6ImIxZGNlMzA2LTIwZGMtNGFiOC04OWM1LWNjNDk5YTEyOWZjNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjllYmQ4MmFhIn0.HebPCvw7VdQYNwDlK9OLjc6jkwdnLrzo2nBiPuMqf_LG-xWBogInYMNgM4w-HLmL8qSCkcOoPKEeFjHMyVHO6g';

@Component({
  selector: 'app-ckeditor',
  standalone: true,
  imports: [CommonModule, CKEditorModule],
  templateUrl: './ckeditor.component.html',
  styleUrl: './ckeditor.component.scss'
})
export class CkeditorComponent implements AfterViewInit {
	constructor(private changeDetector: ChangeDetectorRef) {}
	@Input() data: string = '';
	public isLayoutReady = false;
	public Editor = ClassicEditor;
	public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
	public ngAfterViewInit(): void {
		this.config = {
			toolbar: {
				items: [
					'heading',
					'|',
					'bold',
					'italic',
					'underline',
					'|',
					'link',
					'insertTable',
					'blockQuote',
					'codeBlock',
					'|',
					'outdent',
					'indent'
				],
				shouldNotGroupWhenFull: false
			},
			plugins: [
				Autosave,
				BalloonToolbar,
				BlockQuote,
				Bold,
				CodeBlock,
				Essentials,
				Heading,
				Indent,
				IndentBlock,
				Italic,
				Link,
				Paragraph,
				Table,
				TableCaption,
				TableCellProperties,
				TableColumnResize,
				TableProperties,
				TableToolbar,
				Underline
			],
			balloonToolbar: ['bold', 'italic', '|', 'link'],
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			initialData: this.data,
			licenseKey: LICENSE_KEY,
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			placeholder: 'Ecris ton texte ici...',
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			}
		};

		this.isLayoutReady = true;
		this.changeDetector.detectChanges();
	}
}
