/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

import testUtils from '/tests/ckeditor5/_utils/utils.js';
import Editor from '/ckeditor5/editor.js';
import EditorUI from '/ckeditor5/ui/editorui/editorui.js';
import ComponentFactory from '/ckeditor5/ui/componentfactory.js';
import ControllerCollection from '/ckeditor5/ui/controllercollection.js';

testUtils.createSinonSandbox();

describe( 'EditorUI', () => {
	let editor, editorUI;

	beforeEach( () => {
		editor = new Editor();
		editorUI = new EditorUI( editor );
	} );

	describe( 'constructor', () => {
		it( 'sets all the properties', () => {
			expect( editorUI ).to.have.property( 'editor', editor );

			expect( editorUI.featureComponents ).to.be.instanceof( ComponentFactory );

			expect( editorUI.collections.get( 'body' ) ).to.be.instanceof( ControllerCollection );
		} );

		it( 'sets editor.ui property', () => {
			expect( editor ).to.have.property( 'ui', editorUI );
		} );
	} );

	describe( 'init', () => {
		it( 'calls _setupIconManager when "icon" in model', () => {
			const spy = testUtils.sinon.spy( editorUI, '_setupIconManager' );

			return editorUI.init()
				.then( () => {
					expect( spy.calledOnce ).to.be.true;
				} );
		} );
	} );

	describe( '_setupIconManager', () => {
		it( 'initializes icon manager and sets "iconManager" property', () => {
			editorUI._setupIconManager();

			expect( editorUI ).to.have.property( 'iconManager' );
		} );

		it( 'sets "icon" property', () => {
			editorUI._setupIconManager();

			expect( editorUI.icons ).to.be.an( 'array' );
			expect( editorUI.icons ).to.not.be.empty;
		} );
	} );
} );
