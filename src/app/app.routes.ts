import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { Index3Component } from './components/index3/index3.component';
import { Index4Component } from './components/index4/index4.component';
import { Index5Component } from './components/index5/index5.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddParentComponent } from './components/add-parent/add-parent.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AdmitFormComponent } from './components/admit-form/admit-form.component';
import { AllBookComponent } from './components/all-book/all-book.component';
import { AllClassComponent } from './components/all-class/all-class.component';
import { AllFeesComponent } from './components/all-fees/all-fees.component';
import { AllParentsComponent } from './components/all-parents/all-parents.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AllTeacherComponent } from './components/all-teacher/all-teacher.component';
import { ButtonComponent } from './components/button/button.component';
import { ClassRoutineComponent } from './components/class-routine/class-routine.component';
import { ExamGradeComponent } from './components/exam-grade/exam-grade.component';
import { ExamScheduleComponent } from './components/exam-schedule/exam-schedule.component';
import { GridComponent } from './components/grid/grid.component';
import { HostelComponent } from './components/hostel/hostel.component';
import { MapComponent } from './components/map/map.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { ModalComponent } from './components/modal/modal.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { NotificationAlertComponent } from './components/notification-alert/notification-alert.component';
import { ParentDetailsComponent } from './components/parent-details/parent-details.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StudentAttendanceComponent } from './components/student-attendance/student-attendance.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentPromotionComponent } from './components/student-promotion/student-promotion.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherPaymentComponent } from './components/teacher-payment/teacher-payment.component';
import { TransportComponent } from './components/transport/transport.component';
import { UiTabComponent } from './components/ui-tab/ui-tab.component';
import { UiWidgetComponent } from './components/ui-widget/ui-widget.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent ,data: { title: 'Index' }},
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'header-menu', component: HeaderMenuComponent },
    { path: 'index3', component: Index3Component, data: { title: 'Index3' }  },
    { path: 'index4', component: Index4Component, data: { title: 'Index4' }  },
    { path: 'index5', component: Index5Component, data: { title: 'Index5' }  },
    { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account Settings' }  },
    { path: 'add-book', component: AddBookComponent, data: { title: 'Add Book' }  },
    { path: 'add-class', component: AddClassComponent, data: { title: 'Add Class' }  },
    { path: 'add-expense', component: AddExpenseComponent, data: { title: 'Add Expense' }  },
    { path: 'add-parent', component: AddParentComponent, data: { title: 'Add Parent' }  },
    { path: 'add-teacher', component: AddTeacherComponent, data: { title: 'Add Teacher' }  },
    { path: 'admit-form', component: AdmitFormComponent, data: { title: 'Admit Form' }  },
    { path: 'all-book', component: AllBookComponent, data: { title: 'All Books' }  },
    { path: 'all-class', component: AllClassComponent, data: { title: 'All Class' }  },
    { path: 'all-fees', component: AllFeesComponent, data: { title: 'All Fees' }  },
    { path: 'all-parents', component: AllParentsComponent, data: { title: 'All Parents' }  },
    { path: 'all-students', component: AllStudentComponent, data: { title: 'All Students' }  },
    { path: 'all-subjects', component: AllSubjectComponent, data: { title: 'All Subjects' }  },
    { path: 'all-teachers', component: AllTeacherComponent, data: { title: 'All Teachers' }  },
    { path: 'class-routine', component: ClassRoutineComponent, data: { title: 'Class Routine' }  },
    { path: 'exam-grade', component: ExamGradeComponent, data: { title: 'Exam Grade' }  },
    { path: 'exam-schedule', component: ExamScheduleComponent, data: { title: 'Exam Schedule' }  },
    { path: 'grid', component: GridComponent, data: { title: 'Grid' }  }, 
    { path: 'hostel', component: HostelComponent, data: { title: 'Hostel' }  },
    { path: 'map', component: MapComponent, data: { title: 'Map' }  },
    { path: 'messaging', component: MessagingComponent, data: { title: 'Messaging' }  },
    { path: 'modal', component: ModalComponent, data: { title: 'Modal' }  },
    { path: 'notice-board', component: NoticeBoardComponent, data: { title: 'Notice Board' }  },
    { path: 'notification-alert', component: NotificationAlertComponent, data: { title: 'Notice Alert' }  },
    { path: 'parent-details', component: ParentDetailsComponent, data: { title: 'Parent Details' }  },
    { path: 'progressbar', component: ProgressbarComponent, data: { title: 'Progressbar' }  },
    { path: 'student-attendance', component: StudentAttendanceComponent, data: { title: 'Student Attendance' }  },
    { path: 'student-details', component: StudentDetailsComponent, data: { title: 'Student Details' }  },
    { path: 'student-promotion', component: StudentPromotionComponent, data: { title: 'Student Promotion' }  },
    { path: 'teacher-details', component: TeacherDetailsComponent, data: { title: 'Teacher Details' }  },
    { path: 'teacher-payment', component: TeacherPaymentComponent, data: { title: 'Teacher Payment' }  },
    { path: 'transport', component: TransportComponent, data: { title: 'Transport' }  },
    { path: 'ui-tab', component: UiTabComponent, data: { title: 'Ui Tab' }  },
    { path: 'ui-widget', component: UiWidgetComponent, data: { title: 'Ui Widget' }  },


];



  