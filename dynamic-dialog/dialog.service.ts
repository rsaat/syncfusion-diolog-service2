import { DOCUMENT } from '@angular/common';
import { Injectable, Injector, Inject, ComponentFactoryResolver, ComponentFactory, ComponentRef, TemplateRef, Type } from '@angular/core';
import { MyDialogComponent } from './dialog.component';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable()
export class DialogService {
  const componentRef;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  open<T>(content: Content<T>, args: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MyDialogComponent);
    const ngContent = this.resolveNgContent(content);
    this.componentRef = factory.create(this.injector, ngContent);
    this.componentRef.instance.header = args.header;

    this.componentRef.hostView.detectChanges();

    const { nativeElement } = this.componentRef.location;
    this.document.body.appendChild(nativeElement);
  }

  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }

  close() {
    if(this.componentRef) {
      this.componentRef.destroy();
    }
  }
}