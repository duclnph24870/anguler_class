import { Component } from '@angular/core';
import { Data, Product } from './data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FPT Polytecnic';
  student={
    name: 'Ngọc Đức',
    gender: "Nam",
    point: 9,
    image: 'https://i.pinimg.com/originals/64/d5/f7/64d5f711af697325e65c5187b11290e9.jpg',
    birthday: '13/10/2001'
  }
  data:Data[] = [
    { first: 'Ngọc',last: 'Đức',year: 2001,passed: 2022 },
    { first: 'Ngọc',last: 'Đức',year: 2001,passed: 2022 },
    { first: 'Ngọc',last: 'Đức',year: 2001,passed: 2022 },
    { first: 'Ngọc',last: 'Đức',year: 2001,passed: 2022 },
  ];

  products: Product[] = [
    {
      productId: 1,
      productName: 'Chổi',
      productCode: '1234',
      releaseDate: '12/12/2001',
      price: 5000,
      description: 'Mô tả',
      starRating: 3,
      imageUrl: "https://i.pinimg.com/originals/64/d5/f7/64d5f711af697325e65c5187b11290e9.jpg"
    },
    {
      productId: 1,
      productName: 'Chổi',
      productCode: '1234',
      releaseDate: '12/12/2001',
      price: 5000,
      description: 'Mô tả',
      starRating: 3,
      imageUrl: "https://i.pinimg.com/originals/64/d5/f7/64d5f711af697325e65c5187b11290e9.jpg"
    },
    {
      productId: 1,
      productName: 'Chổi',
      productCode: '1234',
      releaseDate: '12/12/2001',
      price: 5000,
      description: 'Mô tả',
      starRating: 3,
      imageUrl: "https://i.pinimg.com/originals/64/d5/f7/64d5f711af697325e65c5187b11290e9.jpg"
    }
  ];
}
